export const FloatingWindowStylist = () => {
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form>
          { options.map((option, index) => (
            <FormCheck text={ option } multiSelect={ step.multiSelect } key={ index } checked={ checked } setChecked={ setChecked } id={ index } multiChecked={ multiChecked } setMultiChecked={ setMultiChecked } />
          )) }
        </form>
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark" onClick={ nextStep }>Next<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}



import { BiRightArrowAlt } from "react-icons/bi"
import FormCheck from "./FormCheck"

const FloatingWindow = ({ step, options, show, setShow, checked, setChecked, nextStep, multiChecked = [], setMultiChecked = () => { } }) => {
  return (

  )
}

export default FloatingWindow
