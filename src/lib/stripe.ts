import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string;
export const stripeServer = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
});
