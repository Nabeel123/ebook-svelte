<script>
import {loadStripe} from '@stripe/stripe-js'
import {PUBLIC_STRIPE_KEY} from '$env/static/public';
import {goto} from '$app/navigation';

let {children} = $props();

async function handleClick() {
  try {
    // Initialize Stripe
    const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
    if (!stripe) {
      throw new Error('Failed to initialize Stripe');
    }

    // Make the API call
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    // Parse the response
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to create checkout session');
    }
    
    if (!data.url) {
      throw new Error('No checkout URL received');
    }

    // Redirect to checkout
    window.location.href = data.url;
  } catch (error) {
    console.error('Payment error:', error);
    goto("/checkout/failure");
  }
}
</script>

<button onclick={handleClick}>{@render children()}</button>
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
