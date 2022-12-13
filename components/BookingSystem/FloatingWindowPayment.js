import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { BiRightArrowAlt } from "react-icons/bi"
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

const FloatingWindowPayment = ({ steps, setSteps, step, show, setShow, nextStep }) => {
  const [state] = useContext(GlobalContext)

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

  useEffect(() => {
    const paymentBtn = document.querySelector('#bookingSystem .floating-window-body.payment button[type="submit"]')
    if (paymentBtn && state.locale != "en") {
      paymentBtn.innerHTML = 'Betaal met iDEAL'
    }
  }, [])

  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body payment">
        <Elements stripe={ stripePromise }>
          <CheckoutForm step={ step } steps={ steps } />
        </Elements>
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark d-none" onClick={ nextStep }>{ state.text.bookingNext }<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowPayment
