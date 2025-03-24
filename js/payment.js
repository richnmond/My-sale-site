const stripe = Stripe("your-publishable-key"); // Replace with your Stripe Publishable Key

document.getElementById("checkout-button").addEventListener("click", async () => {
    const response = await fetch("/create-checkout-session", { method: "POST" });
    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
});
