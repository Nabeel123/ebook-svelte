import Stripe from "stripe";
import { json } from "@sveltejs/kit";
import { STRIPE_API_KEY } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";

const stripe = new Stripe(STRIPE_API_KEY);
export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: "prod_TISxhujcmHMdLo",
          quantity: 1,
        },
      ],
      success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
      cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/cancel`,
    });
    return json({ sessionId: session.id });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
