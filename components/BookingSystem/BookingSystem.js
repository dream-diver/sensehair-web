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
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
import setSeconds from "date-fns/setSeconds"
import format from "date-fns/format"

import imageSchedule from '../../public/images/schedule.png'
import { set } from 'date-fns'

const BookingSystem = () => {
  const [state, setState] = useContext(GlobalContext)
  // const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(-1)
  const [multiChecked, setMultiChecked] = useState([])
  const [startDate, setStartDate] = useState(setHours(setMinutes(setSeconds(new Date(), 0), 0), 10))

  const show = state.showBooking

  const setShow = (value) => {
    setState({
      ...state,
      showBooking: value
    })
  }
  const initialState = {
    "step1": {
      id: 1,
      active: true,
      title: state.text.bookingStep1Title,
      multiSelect: false,
      value: 0
    },
    "step2": {
      id: 2,
      active: false,
      title: state.text.bookingStep2Title,
      value: 0
    },
    "step3": {
      id: 3,
      active: false,
      title: state.text.bookingStep3Title,
      multiSelect: true,
      serviceType: true,
      value: []
    },
    "step4": {
      id: 4,
      active: false,
      title: state.text.bookingStep4Title,
      multiSelect: false,
      value: 0
    },
    "step5": {
      id: 5,
      active: false,
      title: state.text.bookingStep5Title,
      value: ""
    },
    "step6": {
      id: 6,
      active: false,
      title: state.text.bookingStep5Title,
      value: false,
      guest: {
        isGuest: false,
        name: "",
        email: "",
        phone: ""
      }
    },
    "step7": {
      id: 7,
      active: false,
      title: state.text.bookingStep7Title,
      value: 0.0,
      couponCode: "",
      booking: {}
    },
    "step8": {
      id: 8,
      active: false,
      title: state.text.bookingStep8Title,
      paymentIntent: "",
    },
  }
  const [steps, setSteps] = useState(initialState)
  // Options
  const options = state.options
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

  // Create Booking
  const createGuestBooking = async (date, charge, duration, name, email, phone, stylistId, services, promocode = '') => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/guest/bookings`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "booking_time": date,
          "server_id": stylistId,
          charge,
          duration,
          services,
          promocode,
          name,
          email,
          phone
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
    let reader = readableStream.getReader()
    let utf8Decoder = new TextDecoder()
    let nextChunk

    let resultStr = ''

    while (!(nextChunk = await reader.read()).done) {
      let partialData = nextChunk.value
      resultStr += utf8Decoder.decode(partialData)
    }

    return resultStr
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
      console.log(data)
      return data
    } catch (error) {
      console.log(error.message)
      return null
    }
  }

  // Get Payment Intent From Server
  const getPaymentIntent = async (bookingId, amount, bookingResponse) => {
    const paymentIntentFromServer = await fetchPaymentIntent(bookingId, amount)
    // Set Payment Intent
    if (typeof paymentIntentFromServer === 'string' && paymentIntentFromServer.startsWith('pi_')) {
      setSteps({
        ...steps,
        "step7": { ...steps.step7, active: false, booking: bookingResponse },
        "step8": { ...steps.step8, paymentIntent: paymentIntentFromServer, active: true }
      })
    } else {
      console.log('Payment Intent Error')
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
        "step6": { ...steps.step6, value: true },
        "step7": { ...steps.step7, active: true },
      })
    } else {
      setSteps({
        ...steps,
        "step5": { ...steps.step5, active: false, value: startDate },
        "step6": { ...steps.step6, active: true },
      })
    }
    setStartDate(setHours(setMinutes(setSeconds(new Date(), 0), 0), 10))
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
    const stylistId = steps.step4.value
    const promocode = steps.step7.couponCode
    if (steps.step6.guest.isGuest) {
      const name = steps.step6.guest.name
      const email = steps.step6.guest.email
      const phone = steps.step6.guest.phone
      const guestBookingFromServer = await createGuestBooking(date, charge, duration, name, email, phone, stylistId, services, promocode)
      if (guestBookingFromServer.id) {
        const bookingId = guestBookingFromServer.id
        const amount = guestBookingFromServer.charge
        getPaymentIntent(bookingId, amount, guestBookingFromServer)
      } else {
        console.log('Guest Booking Error')
      }
    } else {
      const customerId = state.auth.user.id
      const bookingFromServer = await createBooking(date, charge, duration, customerId, stylistId, services, promocode)
      if (bookingFromServer.booking) {
        const bookingId = bookingFromServer.booking.data.id
        const amount = bookingFromServer.booking.data.charge
        getPaymentIntent(bookingId, amount, bookingFromServer.booking.data)
      } else {
        console.log('Booking Error')
      }
    }

  }

  const backToFirstStep = () => {
    setChecked(-1)
    setSteps({
      ...steps,
      "step1": { ...steps.step1, active: true, value: 0 },
      "step2": { ...steps.step2, active: false },
    })
  }
  const backToSecondStep = () => {
    setMultiChecked([])
    if (steps.step1.value === 0) {
      setSteps({
        ...steps,
        "step1": { ...steps.step1, active: true, value: 0 },
        "step3": { ...steps.step3, active: false },
      })
    } else {
      setSteps({
        ...steps,
        "step2": { ...steps.step2, active: true, value: 0 },
        "step3": { ...steps.step3, active: false },
      })
    }
  }
  const backToThirdStep = () => {
    setChecked(-1)
    setSteps({
      ...steps,
      "step3": { ...steps.step3, active: true, value: [] },
      "step4": { ...steps.step4, active: false },
    })
  }
  const backToFourthStep = () => {
    setStartDate(setHours(setMinutes(setSeconds(new Date(), 0), 0), 10))
    setSteps({
      ...steps,
      "step4": { ...steps.step4, active: true, value: 0 },
      "step5": { ...steps.step5, active: false },
    })
  }
  const backToFifthStep = () => {
    setSteps({
      ...steps,
      "step5": { ...steps.step5, active: true, value: "" },
      "step6": { ...steps.step6, active: false },
    })
  }

  const setInitialState = () => {
    setSteps(initialState)
  }

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
            <FloatingWindow step={ steps.step2 } options={ optionHairType } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ thirdStep } previousStep={ backToFirstStep } />
          }
          { steps.step3.active &&
            <FloatingWindowServices steps={ steps } setSteps={ setSteps } step={ steps.step3 } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ fourthStep } multiChecked={ multiChecked } setMultiChecked={ setMultiChecked } previousStep={ backToSecondStep } />
          }
          { steps.step4.active &&
            <FloatingWindow step={ steps.step4 } options={ steps.step3.serviceType ? state.stylists.artDirector : state.stylists.stylist } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ fifthStep } previousStep={ backToThirdStep } />
          }
          { steps.step5.active &&
            <FloatingWindowDate steps={ steps } step={ steps.step5 } show={ show } setShow={ setShow } nextStep={ sixthStep } startDate={ startDate } setStartDate={ setStartDate } previousStep={ backToFourthStep } />
          }
          { steps.step6.active &&
            <FloatingWindowAuth steps={ steps } setSteps={ setSteps } step={ steps.step6 } show={ show } setShow={ setShow } nextStep={ seventhStep } previousStep={ backToFifthStep } />
          }
          { steps.step7.active &&
            <FloatingWindowOverview steps={ steps } setSteps={ setSteps } step={ steps.step7 } show={ show } setShow={ setShow } nextStep={ eighthStep } />
          }
          { steps.step8.active &&
            <FloatingWindowPayment steps={ steps } setSteps={ setSteps } step={ steps.step8 } show={ show } setShow={ setShow } nextStep={ () => { } } />
          }
        </>
      }
    </div>
  )
}

export default BookingSystem
