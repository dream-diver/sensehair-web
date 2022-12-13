import Head from "next/head"
import Footer from "../components/Footer"
import { useRef, useState, useContext } from "react";
import { GlobalContext } from "../components/contexts/GlobalContext";
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import LanguageDropdown from "../components/LanguageDropdown";

const Register = () => {
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
        if (!formData.phone) {
            if (!toast.isActive(formToast.current.phone)) {
                formToast.current.phone = toast.warn("Please enter your phone")
            }
            return
        }
        if (!formData.phone.charAt(0) != '+') {
            if (!toast.isActive(formToast.current.phone)) {
                formToast.current.phone = toast.warn("Please add your country code of your mobile number!")
            }
            return;
        };

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
            if (state.locale == 'en') {
                window.location.href = "/en";
            }
            else {
                window.location.href = "/";
            }
        } else {
            if (!toast.isActive(formToast.current.login)) {
                formToast.current.login = toast.error("Email already taken")
            }
        }

    }

    const checkAndAddCountryCode = () => {
        const phoneNumber = formData.phone;
        if (phoneNumber.length >= 6) {
            if (phoneNumber.charAt(0) != '+') {
                const phoneWithCountryCode = `+31${phoneNumber}`;
                setSetFromData({ ...formData, phone: phoneWithCountryCode });
            }
        }
    }
    return (
        <div>
            <Head>
                <title>Register | Sense Hair</title>
                <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center" style={{ fontSize: '3rem' }}>
                    <div className="btn btn-link" onClick={() => router.back()} style={{ fontSize: '3rem' }}> <BiLeftArrowAlt /></div>
                    {state.text.Register}
                </div>
                <LanguageDropdown id="navbarLang2" navToggle={false} />
            </div>
            <div className="row align-items-center justify-content-center" style={{ minHeight: '600px' }}>

                <div className="col-md-6 border rounded shadow p-4">
                    <h2 className="text-center"> {state.text.Register} </h2>

                    <div className="floating-window-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">{state.text.bookingName}</label>
                                <input type="text" name="name" className="form-control" id="inputName" placeholder={state.text.bookingNamePlaceholder} value={formData.name} onChange={(e) => setSetFromData({ ...formData, name: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">{state.text.bookingEmail}</label>
                                <input type="email" name="email" className="form-control" id="inputEmail" placeholder={state.text.bookingEmailPlaceholder} value={formData.email} onChange={(e) => setSetFromData({ ...formData, email: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">{state.text.bookingPassword}</label>
                                <input type="password" name="password" className="form-control" id="inputPassword" placeholder={state.text.bookingPasswordPlaceholder} value={formData.password} onChange={(e) => setSetFromData({ ...formData, password: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPhone" className="form-label">{state.text.bookingPhone}</label>
                                <input onBlur={checkAndAddCountryCode} type="text" name="phone" className="form-control" id="inputPhone" placeholder={state.text.bookingPhonePlaceholder} value={formData.phone} onChange={(e) => setSetFromData({ ...formData, phone: e.target.value })} />
                            </div>
                            <div className="d-flex flex-column justify-content-center w-100 py-3">
                                <div className="m-0 p-0">
                                    {state.text.bookingAccountTextRegister}
                                    <Link href='/login'>
                                        <button type="button" className="btn btn-link px-1">{state.text.bookingAccountButtonRegister}</button>
                                    </Link>
                                </div>

                            </div>
                            <a className="btn-next btn btn-dark" onClick={onSignup}>{state.text.bookingSignUp}<BiRightArrowAlt className="ms-1" /></a>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;