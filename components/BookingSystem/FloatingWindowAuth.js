import { useContext, useRef, useState } from "react"
import { BiRightArrowAlt, BiShare } from "react-icons/bi"
import { GlobalContext } from "../contexts/GlobalContext"
import { toast } from "react-toastify"

const FloatingWindowAuth = ({ step, show, setShow, nextStep, skipStep = () => { } }) => {
  const [state, setState] = useContext(GlobalContext)
  const [formData, setSetFromData] = useState({
    email: "",
    password: "",
    phone: ""
  })
  const formToast = useRef({
    email: null,
    validMail: null,
    password: null,
    login: null
  })
  const onSubmit = async (e) => {
    e.preventDefault()
    //Validation
    if (!formData.email) {
      if (!toast.isActive(formToast.current.email)) {
        formToast.current.email = toast.warn("Please enter your email")
      }
      return
    }
    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Check if it's a email or not
    if (!validMail.test(formData.email)) {
      if (!toast.isActive(formToast.current.validMail)) {
        formToast.current.validMail = toast.warn("Please enter a valid email address")
      }
      return
    }
    if (!formData.password) {
      if (!toast.isActive(formToast.current.password)) {
        formToast.current.password = toast.warn("Please enter your password")
      }
      return
    }

    // Login
    const users = state.users
    const user = users.find(user => user.email === formData.email)
    if (user) {
      if (!toast.isActive(formToast.current.account)) {
        formToast.current.account = toast.warn("You have already an account with this email")
      }
    } else {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ id: users.length + 1, ...formData })
        })
        const data = await res.json()
        if (data) {
          // Login
          setSetFromData({
            username: "",
            password: ""
          })
          localStorage.setItem('login', "true")
          localStorage.setItem('token', "demo_token")
          localStorage.setItem('user', JSON.stringify({ ...data }))
          setState({
            ...state, "auth": {
              "isLogin": true,
              "user": { ...data },
              "token": "demo_token"
            }
          })
        } else {
          if (!toast.isActive(formToast.current.fetch)) {
            formToast.current.fetch = toast.error("Something went wrong. Please try again")
          }
        }
      } catch (error) {
        if (!toast.isActive(formToast.current.fetch)) {
          formToast.current.fetch = toast.error(error.message)
        }
        setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Game Data Fetching Error", "desc": error.message }] })
        return null
      }
    }
  }
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
            <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Enter your email" onChange={ (e) => setSetFromData({ ...formData, email: e.target.value }) } />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Enter your password" onChange={ (e) => setSetFromData({ ...formData, password: e.target.value }) } />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">Phone (Optional)</label>
            <input type="text" name="phone" className="form-control" id="inputPhone" placeholder="Enter your phone number" onChange={ (e) => setSetFromData({ ...formData, phone: e.target.value }) } />
          </div>
        </form>
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark" onClick={ skipStep }>Continue as a gust<BiShare className="ms-1 icon-reflect" /></a>
        <a className="btn-next btn btn-dark" onClick={ onSubmit }>Login<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowAuth
