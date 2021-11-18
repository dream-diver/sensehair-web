import React, { useContext } from 'react';
import { useStripe, useElements, IdealBankElement } from '@stripe/react-stripe-js';

import IdealBankSection from './IdealBankSection';
import { GlobalContext } from '../contexts/GlobalContext';

export default function CheckoutForm({ step }) {
  const [state] = useContext(GlobalContext)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const idealBank = elements.getElement(IdealBankElement);

    const { error } = await stripe.confirmIdealPayment(step.paymentIntent, {
      payment_method: {
        ideal: idealBank,
        billing_details: {
          name: state.auth.user.name,
        },
      },
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    });

    if (error) {
      // Show error to your customer.
      console.log(error.message);
    }

    // Otherwise the customer will be redirected away from your
    // page to complete the payment with their bank.
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-row">
        <IdealBankSection />
      </div>
      <button type="submit" disabled={ !stripe }>
        Submit Payment
      </button>
    </form>
  );
}
