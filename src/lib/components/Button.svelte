<script>
let {children, ...props} = $props();
import {loadStripe} from '@stripe/stripe-js'
import {PUBLIC_STRIPE_KEY} from '$env/static/public';
import {goto} from '$app/navigation';

async function onClick() {
  const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
try {
   const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
    })
    const {sessionID} = await response.json();
    await stripe.redirectToCheckout({sessionID}); 
} catch (error) {
  goto("/checkout/failure")
}
}
</script>

<button {...props} {onClick}>{@render children()}</button>
<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>
