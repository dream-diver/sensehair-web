import { useContext, useState } from 'react'
import { BiCalendarCheck } from 'react-icons/bi'
// import FloatingWindow from '../FloatingWindow'

import { BiRightArrowAlt } from "react-icons/bi"
import { GlobalContext } from '../contexts/GlobalContext'
import FormChecks from "../FormChecks"
import Login from '../Login'

const BookingSystem = () => {
  const [state, setState] = useContext(GlobalContext)
  console.log(state);
  const [step, setStep] = useState({
    "step1": {
      title: "Choose Hair Size"
    }
  })
  const multiSelect = false
  const options = state.options;
  const optionHairSize = options.find(option => option.name === "Hair Size")
  if (optionHairSize) {
    const hairSize = optionHairSize.value
  }

  return (
    <div id="bookingSystem">
      <button className="btn-floating btn btn-lg btn-dark rounded-circle">
        <BiCalendarCheck />
      </button>
      {/* <FloatingWindow title="Choose Hair Size" data={ heirSizes } nextStep="/hair-type" multiSelect={ multiSelect } /> */ }
      { step === "step1" &&
        <div className="floating-window">
          <div className="floating-window-header">
            <h4 className="floating-window-heading">{ title }</h4>
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="floating-window-body">
            <form>
              { login ?
                <Login />
                : <FormChecks data={ data } multiSelect={ multiSelect } />
              }
            </form>
          </div>
          <div className="floating-window-footer">
            <Link href={ nextStep }>
              <a className="btn-next btn btn-dark">
                { login ? "Login" : "Next" }
                <BiRightArrowAlt className="ms-1" />
              </a>
            </Link>
          </div>
        </div>
      }
    </div >
  )
}

export default BookingSystem
