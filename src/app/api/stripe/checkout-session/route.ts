import { NextResponse } from 'next/server';

import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { stripeServer } from '@/lib/stripe';

export const GET = async () => {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      {
        error: {
          code: 'no-access',
          message: 'You are not signed in.',
        },
      },
      { status: 401 }
    );
  }

  const checkoutSession = await stripeServer.checkout.sessions.create({
    mode: 'subscription',
    customer: session.user.stripeCustomerId,
    line_items: [
      {
        price: process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
        quantity: 1,
      },
    ],
    success_url: `${process.env.APP_URL}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.APP_URL,
  });

  return NextResponse.json({ session: checkoutSession }, { status: 200 });
};
