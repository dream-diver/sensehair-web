import { useContext, useState } from 'react'
import { BiCalendarCheck } from 'react-icons/bi'
import { GlobalContext } from '../contexts/GlobalContext'
import FloatingWindow from '../FloatingWindow'
import FloatingWindowDate from '../FloatingWindowDate'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import setSeconds from "date-fns/setSeconds";
import FloatingWindowAuth from '../FloatingWindowAuth'

const BookingSystem = () => {
  const [state, setState] = useContext(GlobalContext)
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(-1)
  const [multiChecked, setMultiChecked] = useState([])
  const [startDate, setStartDate] = useState(setHours(setMinutes(setSeconds(new Date(), 0), 0), 10));
  const [step, setStep] = useState({
    "step1": {
      active: true,
      title: "Choose Hair Size",
      multiSelect: false,
      value: 0
    },
    "step2": {
      active: false,
      title: "Choose Hair Type",
      value: 0
    },
    "step3": {
      active: false,
      title: "Choose Services",
      multiSelect: true,
      value: []
    },
    "step4": {
      active: false,
      title: "Choose Stylist",
      multiSelect: false,
      value: 0
    },
    "step5": {
      active: false,
      title: "Choose Date & Time",
      value: ""
    },
    "step6": {
      active: false,
      title: "Enter your Phone Number",
      value: 0
    },

  })
  // Options
  const options = state.options;
  const optionHairSize = options.find(option => option.name === "Hair Size").value
  const optionHairType = options.find(option => option.name === "Hair Type").value
  // Services
  const services = state.services;
  const optionServices = services.map(service => service.name);
  // Stylists
  const stylists = state.users.filter(user => user.roleId === 2);
  const optionStylists = stylists.map(stylist => stylist.name);

  // Next Functions
  const secondStep = () => {
    if (checked) {
      setStep({
        ...step,
        "step1": { ...step.step1, active: false, value: checked },
        "step2": { ...step.step2, active: true },
      })
    } else {
      setStep({
        ...step,
        "step1": { ...step.step1, active: false, value: checked },
        "step2": { ...step.step2, value: -1 },
        "step3": { ...step.step3, active: true },
      })
    }
    setChecked(-1)
  }
  const thirdStep = () => {
    setStep({
      ...step,
      "step2": { ...step.step2, active: false, value: checked },
      "step3": { ...step.step3, active: true },
    })
    setChecked(-1)
  }
  const fourthStep = () => {
    setStep({
      ...step,
      "step3": { ...step.step3, active: false, value: multiChecked },
      "step4": { ...step.step4, active: true },
    })
    setMultiChecked([])
  }
  const fifthStep = () => {
    setStep({
      ...step,
      "step4": { ...step.step4, active: false, value: checked },
      "step5": { ...step.step5, active: true },
    })
    setChecked(-1)
  }
  const sixthStep = () => {
    setStep({
      ...step,
      "step5": { ...step.step5, active: false, value: startDate },
      "step6": { ...step.step6, active: true },
    })
    setChecked(-1)
  }


  return (
    <div id="bookingSystem">
      { !show ?
        <button className="btn-floating btn btn-lg btn-dark rounded-circle" onClick={ () => setShow(!show) }>
          <BiCalendarCheck />
        </button>
        : <>
          { step.step1.active &&
            <FloatingWindow step={ step.step1 } options={ optionHairSize } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ secondStep } />
          }
          { step.step2.active &&
            <FloatingWindow step={ step.step2 } options={ optionHairType } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ thirdStep } />
          }
          { step.step3.active &&
            <FloatingWindow step={ step.step3 } options={ optionServices } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ fourthStep } multiChecked={ multiChecked } setMultiChecked={ setMultiChecked } />
          }
          { step.step4.active &&
            <FloatingWindow step={ step.step4 } options={ optionStylists } show={ show } setShow={ setShow } checked={ checked } setChecked={ setChecked } nextStep={ fifthStep } />
          }
          { step.step5.active &&
            <FloatingWindowDate step={ step.step5 } show={ show } setShow={ setShow } nextStep={ sixthStep } startDate={ startDate } setStartDate={ setStartDate } />
          }
          { step.step6.active &&
            <FloatingWindowAuth step={ step.step6 } show={ show } setShow={ setShow } nextStep={ sixthStep } />
          }
        </>
      }
    </div >
  )
}

export default BookingSystem
