import Head from 'next/head';
import React, { useState, useContext, useRef } from 'react';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { GlobalContext } from '../components/contexts/GlobalContext';
import { toast } from "react-toastify";

function ForgetPassword() {
    const router = useRouter();
    const [state, setState] = useContext(GlobalContext)
    const [formData, setSetFromData] = useState({
        email: "",
    });
    const formToast = useRef({
        email: null,
    })
    const login = async (bodyData) => {
        document.getElementById('sendButton').classList.add('disabled');
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forget-password`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(bodyData)
            })
            const data = await response.json();
            document.getElementById('sendButton').classList.remove('disabled');
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
        if (!validMail.test(formData.email)) {
            if (!toast.isActive(formToast.current.validMail)) {
                formToast.current.validMail = toast.warn("Please enter a valid email address")
            }
            return
        }

        const bodyData = {
            email: formData.email,
        }
        const reset = await login(bodyData)

        if (!toast.isActive(formToast.current.email) && reset.status === "success") {
            formToast.current.login = toast.success(reset.msg)
        }
        else if (!toast.isActive(formToast.current.email) && reset.status === "error") {
            formToast.current.login = toast.error(reset.msg)
        }
    }
    return (
        <div>
            <Head>
                <title>Forget-Password | Sense Hair</title>
                <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="d-flex align-items-center" style={{ fontSize: '3rem' }}>
                <div className="btn btn-link" onClick={() => router.back()} style={{ fontSize: '3rem' }}> <BiLeftArrowAlt /></div>
            </div>
            <div className="row align-items-center justify-content-center" style={{ minHeight: '600px' }}>
                <div className="col-md-6 border rounded shadow p-4">
                    <h2 className="text-center"> {state.text.forgotPassText} </h2>
                    <div className="floating-window-body row justify-content-center">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">{state.text.bookingEmail}</label>
                                <input type="email" name="email" className="form-control" id="inputEmail" placeholder={state.text.bookingEmailPlaceholder} value={formData.email} onChange={(e) => setSetFromData({ ...formData, email: e.target.value })} />
                            </div>
                        </form>
                        <button id='sendButton' className="btn-next btn btn-dark w-25" onClick={onLogin}>{state.text.sendEmailText}<BiRightArrowAlt className="ms-1" /></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ForgetPassword;