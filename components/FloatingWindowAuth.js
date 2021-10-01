import { BiRightArrowAlt } from "react-icons/bi"

const FloatingWindowAuth = ({ step, show, setShow, nextStep }) => {
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">Phone</label>
            <input type="email" className="form-control" id="inputPhone" placeholder={ step.title } />
          </div>
        </form>
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark" onClick={ nextStep }>Next<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowAuth
