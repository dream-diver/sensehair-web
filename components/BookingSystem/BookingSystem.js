import { useContext, useState } from 'react'
import { BiCalendarCheck } from 'react-icons/bi'
import { GlobalContext } from '../contexts/GlobalContext'
import FloatingWindow from './FloatingWindow'
import FloatingWindowDate from './FloatingWindowDate'
import FloatingWindowAuth from './FloatingWindowAuth'
import FloatingWindowServices from './FloatingWindowServices'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import setSeconds from "date-fns/setSeconds";

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
      value: 0
    },

  })
  // Options
  const options = state.options;
  const optionHairSize = options.find(option => option.name === "Hair Size").option
  const optionHairType = options.find(option => option.name === "Hair Type").option
  // Stylists
  const stylists = state.users.filter(user => user.roleId === 2);
  const optionStylists = stylists.map(stylist => stylist.name);


  // fetch Services
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
    setSteps({
      ...steps,
      "step5": { ...steps.step5, active: false, value: startDate },
      "step6": { ...steps.step6, active: true },
    })
    setChecked(-1)
  }
  console.log(steps);
  console.log(state);

  return (
    <div id="bookingSystem">
      { !show ?
        <button className="btn-floating btn btn-lg btn-dark rounded-circle" onClick={ () => setShow(!show) }>
          <BiCalendarCheck />
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
            <FloatingWindowAuth step={ steps.step6 } show={ show } setShow={ setShow } nextStep={ sixthStep } />
          }
        </>
      }
    </div >
  )
}

export default BookingSystem
