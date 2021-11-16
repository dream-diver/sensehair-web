import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { BiRightArrowAlt } from "react-icons/bi"

const FloatingWindow = ({ steps, setSteps, step, show, setShow, nextStep }) => {
  const [paymentIntent, setPaymentIntent] = useState({})

  const getTextFromStream = async (readableStream) => {
    let reader = readableStream.getReader();
    let utf8Decoder = new TextDecoder();
    let nextChunk;

    let resultStr = '';

    while (!(nextChunk = await reader.read()).done) {
      let partialData = nextChunk.value;
      resultStr += utf8Decoder.decode(partialData);
    }

    return resultStr;
  }

  // Fetch Payment Intent
  const fetchPaymentIntent = async (bookingId, amount) => {
    console.log("hit");
    try {
      console.log(1);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${bookingId}/getPaymentIntent?amount=${amount}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      console.log(2);
      const data = await getTextFromStream(response.body)
      console.log(data);
      console.log(3);
      return data
    } catch (error) {
      console.log(error.message)
      return null
    }
  }
  useEffect(() => {
    const getPaymentIntent = async () => {
      const bookingId = steps.step7.booking.id
      const amount = steps.step7.booking.charge
      // Get Payment Intent From Server
      const paymentIntentFromServer = await fetchPaymentIntent(bookingId, amount)
      // Set Payment Intent
      setPaymentIntent(paymentIntentFromServer)
      console.log("done", paymentIntentFromServer);
    }
    getPaymentIntent()
  }, [])


  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        { step.title }
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark" onClick={ nextStep }>Next<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindow
