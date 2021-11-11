import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { BiRightArrowAlt } from "react-icons/bi"

const FloatingWindow = ({ steps, step, show, setShow, nextStep }) => {
  const [state] = useContext(GlobalContext)

  // Options
  const options = state.options;
  const optionHairSize = options.find(option => option.name === "Hair Size").option
  const optionHairType = options.find(option => option.name === "Hair Type").option

  const selectedServicesId = steps.step3.value
  const selectedServices = state.services.filter(({ id }) => selectedServicesId.includes(id))

  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <p>
          <strong>Hair Size: </strong>{ optionHairSize[steps.step1.value].name }
        </p>
        { steps.step2.value !== -1 &&
          <p>
            <strong>Hair Type: </strong>{ optionHairType[steps.step2.value].name }
          </p>
        }
        <p>
          <strong>Services: </strong>
          <span>

          </span>
          { selectedServices.map((service, index) => (<>
            { service.name }
          </>)
          ) }
        </p>
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark" onClick={ nextStep }>Next<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindow
