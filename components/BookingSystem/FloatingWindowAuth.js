import { useContext, useRef, useState } from "react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { GlobalContext } from "../contexts/GlobalContext"
import { toast } from "react-toastify"

const FloatingWindowAuth = ({ steps, setSteps, step, show, setShow, nextStep, previousStep }) => {
  const [state, setState] = useContext(GlobalContext)
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setSetFromData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  })
  const formToast = useRef({
    name: null,
    email: null,
    validMail: null,
    password: null,
    login: null
  })

  const login = async (bodyData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(bodyData)
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
    }
  }

  const register = async (bodyData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(bodyData)
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
    }
  }

  const onSignup = async (e) => {
    e.preventDefault()
    //Validation
    if (!formData.name) {
      if (!toast.isActive(formToast.current.name)) {
        formToast.current.name = toast.warn("Please enter your name")
      }
      return
    }
    if (!formData.email) {
      if (!toast.isActive(formToast.current.email)) {
        formToast.current.email = toast.warn("Please enter your email")
      }
      return
    }
    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

    const bodyData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    }
    const loginData = await register(bodyData)

    if (loginData.token) {
      setSetFromData({
        ...formData,
        name: "",
        email: "",
        password: "",
        phone: ""
      })
      localStorage.setItem('login', "true")
      localStorage.setItem('token', loginData.token)
      localStorage.setItem('user', JSON.stringify(loginData.user.data))
      setState({
        ...state, "auth": {
          "isLogin": true,
          "user": { ...loginData.user.data },
          "token": loginData.token
        }
      })
      nextStep()
    } else {
      if (!toast.isActive(formToast.current.login)) {
        formToast.current.login = toast.error("Email already taken")
      }
    }

  }

  const onLogin = async (e) => {
    e.preventDefault()
    //Validation
    if (!formData.email) {
      if (!toast.isActive(formToast.current.email)) {
        formToast.current.email = toast.warn("Please enter your email")
      }
      return
    }

    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

    const bodyData = {
      email: formData.email,
      password: formData.password,
    }
    const loginData = await login(bodyData)

    if (loginData.token) {
      setSetFromData({
        ...formData,
        email: "",
        password: ""
      })
      localStorage.setItem('login', "true")
      localStorage.setItem('token', loginData.token)
      localStorage.setItem('user', JSON.stringify(loginData.user.data))
      setState({
        ...state, "auth": {
          "isLogin": true,
          "user": { ...loginData.user.data },
          "token": loginData.token
        }
      })
      nextStep()
    } else {
      if (!toast.isActive(formToast.current.login)) {
        formToast.current.login = toast.error("The username or password you have entered is wrong")
      }
    }
  }

  const onGuest = (e) => {
    e.preventDefault()

    //Validation
    if (!formData.name) {
      if (!toast.isActive(formToast.current.name)) {
        formToast.current.name = toast.warn("Please enter your name")
      }
      return
    }
    if (!formData.email) {
      if (!toast.isActive(formToast.current.email)) {
        formToast.current.email = toast.warn("Please enter your email")
      }
      return
    }
    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //Check if it's a email or not
    if (!validMail.test(formData.email)) {
      if (!toast.isActive(formToast.current.validMail)) {
        formToast.current.validMail = toast.warn("Please enter a valid email address")
      }
      return
    }
    setSteps({
      ...steps,
      "step6": {
        ...steps.step6,
        active: false,
        value: true,
        guest: {
          ...steps.step6.guest,
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        }
      },
      "step7": { ...steps.step7, active: true }
    })
  }

  const toggleGuestMode = () => {
    setSteps({
      ...steps,
      "step6": { ...steps.step6, guest: { ...steps.step6.guest, isGuest: !steps.step6.guest.isGuest } },
    })
    setIsLogin(!isLogin)
  }

  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.guest.isGuest ? "Guest Booking" : isLogin ? step.title : "Sign Up" }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form>
          { !isLogin &&
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input type="text" name="name" className="form-control" id="inputName" placeholder="Enter your name" value={ formData.name } onChange={ (e) => setSetFromData({ ...formData, name: e.target.value }) } />
            </div>
          }
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Enter your email" value={ formData.email } onChange={ (e) => setSetFromData({ ...formData, email: e.target.value }) } />
          </div>
          {
            !step.guest.isGuest &&
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Enter your password" value={ formData.password } onChange={ (e) => setSetFromData({ ...formData, password: e.target.value }) } />
            </div>
          }
          { !isLogin &&
            <div className="mb-3">
              <label htmlFor="inputPhone" className="form-label">Phone (Optional)</label>
              <input type="text" name="phone" className="form-control" id="inputPhone" placeholder="Enter your phone number" value={ formData.phone } onChange={ (e) => setSetFromData({ ...formData, phone: e.target.value }) } />
            </div>
          }
          <div className="d-flex flex-column justify-content-center w-100 py-3">
            { !step.guest.isGuest && <button onClick={ () => setIsLogin(!isLogin) } type="button" className="btn btn-outline-dark shadow-sm mb-3">{ `I ${isLogin ? "don't" : ""}  have an account` }</button> }
            <button button onClick={ toggleGuestMode } type="button" className="btn btn-outline-dark shadow-sm">{ `Continue as a ${step.guest.isGuest ? "user" : "guest"}` }</button>
          </div>

        </form>
      </div>
      <div className="floating-window-footer">
        <a className={ `btn-next btn btn-dark` } onClick={ previousStep }><BiLeftArrowAlt className="me-1" />{ state.text.bookingBack }</a>
        <a className="btn-next btn btn-dark" onClick={ step.guest.isGuest ? onGuest : isLogin ? onLogin : onSignup }>{ step.guest.isGuest ? "Guest Booking" : isLogin ? "Login" : "Sign Up" }<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowAuth
