// server.js
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_YourSecretKeyHere'); // Replace with your Stripe secret key
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // in cents
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
