import Link from 'next/link'
import { BiRightArrowAlt } from "react-icons/bi"
import FormChecks from "./FormChecks"
import Login from './Login'

const FloatingWindow = ({ title, data, nextStep, multiSelect, login }) => {
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{title}</h4>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className="floating-window-body">
        <form>
          {login ?
            <Login />
            : <FormChecks data={data} multiSelect={multiSelect} />
          }
        </form>
      </div>
      <div className="floating-window-footer">
        <Link href={nextStep}>
          <a className="btn-next btn btn-dark">
            {login ? "Login" : "Next"}
            <BiRightArrowAlt className="ms-1" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FloatingWindow
