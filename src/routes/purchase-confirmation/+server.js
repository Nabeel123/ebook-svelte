import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY } from "$env/static/private";
const PDF_GUIDE_URL =
  "https://drive.google.com/file/d/1agi9ay_XFu9DgB6d6k20ylIlz3Nm6-ql/view?usp=sharing";
sgMail.setApiKey(SENDGRID_API_KEY);
export async function POST({ request }) {
  try {
    const requestBody = await request.json();
    const customerEmail = requestBody.data.object.customer_details.email;
    const customerName = requestBody.data.object.customer_details.name;

    const responsePDF = await fetch(PDF_GUIDE_URL);
    const bufferPDF = await responsePDF.arrayBuffer();
    const base64PDF = Buffer.from(bufferPDF).toString("base64");

    const msg = {
      to: customerEmail,
      from: "cliadussolutions@gmail.com",
      subject: "Your Purhcase Confirmation - Move to Sweden E-book",
      text: `Dear ${customerName},\n\nThank you for your purchase of the "Move to Sweden E-book". We appreciate your support!\n\nBest regards,\nThe Move to Sweden Team`,
      html: `<p>Dear ${customerName},</p><p>Thank you for your purchase of the "<strong>Move to Sweden E-book</strong>". We appreciate your support!</p><p>Best regards,<br>The Move to Sweden Team</p>`,
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
    console.log(`Email sent successfully to ${customerEmail}`);
    return json({ response: "Email sent successfully!" });
  } catch (error) {
    console.error("SendGrid error:", error);
    if (error.response) {
      console.error("SendGrid response body:", error.response.body);
    }
    return json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
