import { BiRightArrowAlt } from "react-icons/bi"
import FormCheck from "./FormCheck"

const FloatingWindow = ({ step, options, show, setShow, checked, setChecked, nextStep, multiChecked = [], setMultiChecked = () => { } }) => {
  let stylist = {};
  if (step.id === 4) {
    stylist = {
      "name": "Any Stylist",
      "image": "https://i.imgur.com/Pw8rezI.png"
    }
  }
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form className={ step.id === 1 || step.id === 2 || step.id === 4 ? "floating-window-form floating-window-form-grid" : "floating-window-form floating-window-form-list" }>
          { options.map((option, index) => (
            <FormCheck id={ step.id === 4 ? option.id : index } data={ option } multiSelect={ step.multiSelect } key={ index } checked={ checked } setChecked={ setChecked } step={ step } multiChecked={ multiChecked } setMultiChecked={ setMultiChecked } />
          )) }
        </form>
      </div>
      <div className="floating-window-footer">
        <a className={ `btn-next btn btn-dark ${checked === -1 && "disabled"}` } onClick={ nextStep }>Next<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindow
