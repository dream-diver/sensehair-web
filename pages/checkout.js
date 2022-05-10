/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useRef, useState } from 'react'
import { BiLeftArrowAlt } from "react-icons/bi"
import { toast } from 'react-toastify'
import { GlobalContext } from '../components/contexts/GlobalContext'

const checkout = () => {
  const [state, setState] = useContext(GlobalContext)
  const [paymentSubmit, setPaymentSubmit] = useState(false)
  const toastId = useRef(null)
  const router = useRouter()
  const { payment, redirect_status, payment_intent } = router.query

  // Send Notification
  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      let Message = ""
      if (payment === "paylater" || redirect_status === "succeeded") {
        Message = state.locale === 'en' ? `${payment === "paylater" ? "Booking" : "Payment"} Successful` : `${payment === "paylater" ? "Boeking" : "Betaling"} Succesvol`
        toastId.current = toast.success(Message)
      } else {
        Message = state.locale === 'en' ? `Booking Failed` : `Reserveren Mislukt`
        toastId.current = toast.error(Message)
      }
    }
  }

  useEffect(() => {
    setState({ ...state, showBooking: false })
    // Submit Payment Success Info
    const submitPaymentSuccessInfo = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/submitPaymentSuccess?payment_intent_id=${payment_intent}`)
        const data = await response.json()
        return data
      } catch (error) {
        console.log(error.message)
        return null
      }
    }

    if (payment_intent) {
      if (paymentSubmit) {
        submitPaymentSuccessInfo()
        setPaymentSubmit(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <Head>
        <title>Sense Hair</title>
        <meta name="description" content="Sense Hair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center mt-5 mb-4">{ `${payment === "paylater" ? "Booking" : "Payment"} ${redirect_status === undefined ? "Successful" : redirect_status === "succeeded" ? "Successful" : "Failed"}` }</h1>
      <div className="d-flex justify-content-center">
        <Link href="/">
          <a className="btn btn-dark" href="#"><BiLeftArrowAlt className="me-1" />{ state.locale === 'en' ? "Back To Home" : "Terug naar homepage" }</a>
        </Link>
      </div>
    </div>
  )
}

export default checkout
