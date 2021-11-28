/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from 'react'
import { BiCalendarCheck } from 'react-icons/bi'
import { GlobalContext } from '../contexts/GlobalContext'
import FloatingWindow from './FloatingWindow'
import FloatingWindowServices from './FloatingWindowServices'
import FloatingWindowDate from './FloatingWindowDate'
import FloatingWindowAuth from './FloatingWindowAuth'
import FloatingWindowOverview from './FloatingWindowOverview'
import FloatingWindowPayment from './FloatingWindowPayment'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import setSeconds from "date-fns/setSeconds";
import format from "date-fns/format";

import imageSchedule from '../../public/images/schedule.png';

const BookingSystem = () => {
  const [state, setState] = useContext(GlobalContext)
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(-1)
  const [multiChecked, setMultiChecked] = useState([])
  const [startDate, setStartDate] = useState(setHours(setMinutes(setSeconds(new Date(), 0), 0), 10));

  const [steps, setSteps] = useState({
    "step1": {
      id: 1,
      active: true,
      title: "Choose Hair Size",
      multiSelect: false,
      value: 0
    },
    "step2": {
      id: 2,
      active: false,
      title: "Choose Hair Type",
      value: 0
    },
    "step3": {
      id: 3,
      active: false,
      title: "Choose Services",
      multiSelect: true,
      serviceType: true,
      value: []
    },
    "step4": {
      id: 4,
      active: false,
      title: "Choose Stylist",
      multiSelect: false,
      value: 0
    },
    "step5": {
      id: 5,
      active: false,
      title: "Choose Date & Time",
      value: ""
    },
    "step6": {
      id: 6,
      active: false,
      title: "Login",
      value: false
    },
    "step7": {
      id: 7,
      active: false,
      title: "Booking Overview",
      value: 0.0,
      couponCode: "",
      booking: {}
    },
    "step8": {
      id: 8,
      active: false,
      title: "Payment",
      paymentIntent: "",
    },

  })
  // Options
  const options = state.options;
  const optionHairSize = options.find(option => option.name === "Hair Size").option
  const optionHairType = options.find(option => option.name === "Hair Type").option

  // Fetch Services
  const fetchServices = async (hairSize, hairType) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?hair_size=${hairSize}&hair_type=${hairType}&limit=all`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
      return null
    }
  }

  // Create Booking
  const createBooking = async (date, charge, duration, customerId, stylistId, services, promocode = '') => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.auth.token}`
        },
        body: JSON.stringify({
          "booking_time": date,
          "customer_id": customerId,
          "server_id": stylistId,
          charge,
          duration,
          services,
          promocode
        })
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
      return null
    }
  }

  // Get Text From Stream
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
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${bookingId}/getPaymentIntent?amount=${amount}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const data = await getTextFromStream(response.body)
      console.log(data);
      return data
    } catch (error) {
      console.log(error.message)
      return null
    }
  }

  // Next Functions
  const secondStep = async () => {
    if (checked) {
      setSteps({
        ...steps,
        "step1": { ...steps.step1, active: false, value: checked },
        "step2": { ...steps.step2, active: true },
      })
    } else {
      setSteps({
        ...steps,
        "step1": { ...steps.step1, active: false, value: checked },
        "step2": { ...steps.step2, value: -1 },
        "step3": { ...steps.step3, active: true },
      })
    }
    setChecked(-1)
  }
  const thirdStep = () => {
    setSteps({
      ...steps,
      "step2": { ...steps.step2, active: false, value: checked },
      "step3": { ...steps.step3, active: true },
    })
    setChecked(-1)
  }
  const fourthStep = () => {
    setSteps({
      ...steps,
      "step3": { ...steps.step3, active: false, value: multiChecked },
      "step4": { ...steps.step4, active: true },
    })
    setMultiChecked([])
  }
  const fifthStep = () => {
    setSteps({
      ...steps,
      "step4": { ...steps.step4, active: false, value: checked },
      "step5": { ...steps.step5, active: true },
    })
    setChecked(-1)
  }
  const sixthStep = () => {
    if (state.auth.isLogin) {
      setSteps({
        ...steps,
        "step5": { ...steps.step5, active: false, value: startDate },
        "step7": { ...steps.step7, active: true },
      })
    } else {
      setSteps({
        ...steps,
        "step5": { ...steps.step5, active: false, value: startDate },
        "step6": { ...steps.step6, active: true },
      })
    }
    setChecked(-1)
  }
  const seventhStep = () => {

    setSteps({
      ...steps,
      "step6": { ...steps.step6, active: false, value: true },
      "step7": { ...steps.step7, active: true },
    })
  }
  const eighthStep = async () => {
    const date = format(steps.step5.value, "yyyy-MM-dd HH:mm")
    const charge = steps.step7.value
    const services = steps.step3.value
    const duration = state.services.filter(({ id }) => services.includes(id)).map(services => services.duration).reduce((a, b) => a + b, 0)
    const customerId = state.auth.user.id
    const stylistId = steps.step4.value
    const promocode = steps.step7.couponCode

    const bookingFromServer = await createBooking(date, charge, duration, customerId, stylistId, services, promocode)
    if (bookingFromServer.booking) {

      const bookingId = bookingFromServer.booking.data.id
      const amount = bookingFromServer.booking.data.charge
      // Get Payment Intent From Server
      const paymentIntentFromServer = await fetchPaymentIntent(bookingId, amount)
      // Set Payment Intent
      if (typeof paymentIntentFromServer === 'string' && paymentIntentFromServer.startsWith('pi_')) {
        setSteps({
          ...steps,
          "step7": { ...steps.step7, active: false, booking: bookingFromServer.booking.data },
          "step8": { ...steps.step8, paymentIntent: paymentIntentFromServer, active: true }
        })
      } else {
        console.log('Payment Intent Error')
      }
    } else {
      console.log('Booking Error')
    }
  }
  console.log(steps);
  console.log(state);

  return (
    <div id="bookingSystem">
      { !show ?
        <button className="btn-floating btn btn-lg btn-dark rounded-circle" onClick={ () => setShow(!show) }>
          <img src={ imageSchedule.src } alt="Booking System" className="booking-img" width="18px" height="18px" />
        </button>
        : <>
          { steps.step1.active &&
            <FloatingWindow step={ steps.step1 } options={ optionHairSize } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ secondStep } />
          }
          { steps.step2.active &&
            <FloatingWindow step={ steps.step2 } options={ optionHairType } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ thirdStep } />
          }
          { steps.step3.active &&
            <FloatingWindowServices steps={ steps } setSteps={ setSteps } step={ steps.step3 } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ fourthStep } multiChecked={ multiChecked } setMultiChecked={ setMultiChecked } />
          }
          { steps.step4.active &&
            <FloatingWindow step={ steps.step4 } options={ steps.step3.serviceType ? state.stylists.artDirector : state.stylists.stylist } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ fifthStep } />
          }
          { steps.step5.active &&
            <FloatingWindowDate steps={ steps } step={ steps.step5 } show={ show } setShow={ setShow } nextStep={ sixthStep } startDate={ startDate } setStartDate={ setStartDate } />
          }
          { steps.step6.active &&
            <FloatingWindowAuth step={ steps.step6 } show={ show } setShow={ setShow } nextStep={ seventhStep } />
          }
          { steps.step7.active &&
            <FloatingWindowOverview steps={ steps } setSteps={ setSteps } step={ steps.step7 } show={ show } setShow={ setShow } nextStep={ eighthStep } />
          }
          { steps.step8.active &&
            <FloatingWindowPayment steps={ steps } setSteps={ setSteps } step={ steps.step8 } show={ show } setShow={ setShow } nextStep={ eighthStep } />
          }
        </>
      }
    </div >
  )
}

export default BookingSystem
