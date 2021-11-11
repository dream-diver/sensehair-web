import { BiRightArrowAlt } from "react-icons/bi"
import FormCheck from "./FormCheck"

const FloatingWindow = ({ steps, step, show, setShow, nextStep }) => {

  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <p>
          <strong>Hair Size: </strong>{ steps.step1.value }
        </p>
        { steps.step2.value !== -1 &&
          <p>
            <strong>Hair Type: </strong>{ steps.step2.value }
          </p>
        }
        <p>
          <strong>Services: </strong>{ steps.step3.value.map(service => (<>
            { service }
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
