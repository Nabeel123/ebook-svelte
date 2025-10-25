import Stripe from "stripe";
import { json } from "@sveltejs/kit";
import { STRIPE_API_KEY } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";

const stripe = new Stripe(STRIPE_API_KEY);
export async function POST() {
  try {
    if (!STRIPE_API_KEY) {
      throw new Error("Stripe API key is not configured");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Move to Spain E-book",
              description: "Comprehensive guide for moving to Spain",
            },
            unit_amount: 1000, // $10.00 in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
      cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`,
    });

    if (!session || !session.url) {
      throw new Error("Failed to create Stripe checkout session");
    }

    return json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    return json(
      {
        error: error.message,
        details: error.type || "unknown_error",
      },
      {
        status: 500,
      }
    );
  }
}
