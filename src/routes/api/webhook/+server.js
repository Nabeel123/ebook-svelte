import Stripe from "stripe";
import { json } from "@sveltejs/kit";
import { STRIPE_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY } from "$env/static/private";

const stripe = new Stripe(STRIPE_API_KEY);
sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL =
  "https://drive.google.com/file/d/1agi9ay_XFu9DgB6d6k20ylIlz3Nm6-ql/view?usp=sharing";

export async function POST({ request }) {
  const sig = request.headers.get("stripe-signature");
  const body = await request.text();

  let event;

  try {
    // For development/testing without webhook secret
    // In production, you should verify the webhook signature
    event = JSON.parse(body);

    console.log("Received Stripe event:", event.type);

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      console.log("Processing payment for:", session.customer_details.email);

      try {
        // Fetch the PDF
        const responsePDF = await fetch(PDF_GUIDE_URL);
        const bufferPDF = await responsePDF.arrayBuffer();
        const base64PDF = Buffer.from(bufferPDF).toString("base64");

        // Send email with PDF attachment
        const msg = {
          to: session.customer_details.email,
          from: "cliadussolutions@gmail.com",
          subject: "Your Purchase Confirmation - Move to Sweden E-book",
          text: `Dear ${session.customer_details.name},\n\nThank you for your purchase of the "Move to Sweden E-book". We appreciate your support!\n\nBest regards,\nThe Move to Sweden Team`,
          html: `<p>Dear ${session.customer_details.name},</p><p>Thank you for your purchase of the "<strong>Move to Sweden E-book</strong>". We appreciate your support!</p><p>Best regards,<br>The Move to Sweden Team</p>`,
          attachments: [
            {
              content: base64PDF,
              filename: "Move_to_Sweden_Ebook.pdf",
              type: "application/pdf",
              disposition: "attachment",
            },
          ],
        };

        await sgMail.send(msg);
        console.log(
          `Email sent successfully to ${session.customer_details.email}`
        );
      } catch (error) {
        console.error("Error sending email:", error);
        if (error.response) {
          console.error("SendGrid response body:", error.response.body);
        }
        // Don't return error to Stripe - we still want to acknowledge receipt
      }
    }

    return json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return json({ error: "Webhook handler failed" }, { status: 400 });
  }
}
