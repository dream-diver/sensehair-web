import { BiRightArrowAlt, BiShare } from "react-icons/bi"

const FloatingWindowAuth = ({ step, show, setShow, nextStep, skipStep = () => { } }) => {
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Enter your password" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">Phone (Optional)</label>
            <input type="text" className="form-control" id="inputPhone" placeholder="Enter your phone number" />
          </div>
        </form>
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark" onClick={ skipStep }>Continue as a gust<BiShare className="ms-1 icon-reflect" /></a>
        <a className="btn-next btn btn-dark" onClick={ nextStep }>Login<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowAuth
