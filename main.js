const stripe = require('stripe');

const Stripe = stripe("api_keySDo89dusf8sdf8");

Stripe.pay("stripe ceo", $10000);