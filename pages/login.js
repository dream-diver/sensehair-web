import Head from "next/head"
import Footer from "../components/Footer"
import { useRef, useState, useContext } from "react";
import { GlobalContext } from "../components/contexts/GlobalContext";
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import LanguageDropdown from "../components/LanguageDropdown";

const Login = () => {
    const router = useRouter();
    const [state, setState] = useContext(GlobalContext)
    const [formData, setSetFromData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const formToast = useRef({
        name: null,
        email: null,
        validMail: null,
        password: null,
        login: null,
        phone: null
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
            if (state.locale == 'en') {
                window.location.href = "/en";
            }
            else {
                window.location.href = "/";
            }
        } else {
            if (!toast.isActive(formToast.current.login)) {
                formToast.current.login = toast.error("The username or password you have entered is wrong")
            }
        }
    }

    return (
        <div>
            <Head>
                <title>Login | Sense Hair</title>
                <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center" style={{ fontSize: '3rem' }}>
                    <div className="btn btn-link" onClick={() => router.back()} style={{ fontSize: '3rem' }}> <BiLeftArrowAlt /></div>
                    {state.text.Login}
                </div>

                <LanguageDropdown id="navbarLang2" navToggle={false} />
            </div>
            <div className="row align-items-center justify-content-center" style={{ minHeight: '600px' }}>

                <div className="col-md-6 border rounded shadow p-4">
                    <h2 className="text-center"> {state.text.Login} </h2>
                    <div className="floating-window-body row justify-content-center">
                        <form>

                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">{state.text.bookingEmail}</label>
                                <input type="email" name="email" className="form-control" id="inputEmail" placeholder={state.text.bookingEmailPlaceholder} value={formData.email} onChange={(e) => setSetFromData({ ...formData, email: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">{state.text.bookingPassword}</label>
                                <input type="password" name="password" className="form-control" id="inputPassword" placeholder={state.text.bookingPasswordPlaceholder} value={formData.password} onChange={(e) => setSetFromData({ ...formData, password: e.target.value })} />
                            </div>

                            <div className="d-flex flex-column justify-content-center w-100 py-3">
                                <div className="m-0 p-0">
                                    <Link className="me-2" href="/forget">
                                        {state.text.forgotPassText}
                                    </Link>
                                    {/* {isLogin ?  : state.text.bookingAccountTextRegister} */}
                                    <div>
                                        {state.text.bookingAccountTextLogin}
                                        <Link href="/register">
                                            <button type="button" className="btn btn-link px-1">{state.text.bookingAccountButtonLogin}</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </form>
                        <button className="btn-next btn btn-dark w-25" onClick={onLogin}>{state.text.bookingLogin}<BiRightArrowAlt className="ms-1" /></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;