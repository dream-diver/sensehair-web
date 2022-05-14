import React, { useState, useContext, useEffect, useRef } from 'react';
import Footer from "../components/Footer";
import MainMenu from '../components/MainMenu';
import Head from 'next/head';
import { GlobalContext } from '../components/contexts/GlobalContext';
import { toast } from "react-toastify";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function Profile() {
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

    useEffect( ()=>{
        console.log(state.auth);
        if (state.auth.isLogin) {
            setSetFromData({...formData,name:state.auth.user.name,email:state.auth.user.email,phone:state.auth.user.phone});
        }
    },[] )
    const update = async (bodyData) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${state.auth.user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${state.auth.token}`,
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
        if (!formData.phone) {
            if (!toast.isActive(formToast.current.phone)) {
                formToast.current.phone = toast.warn("Please enter your phone")
            }
            return
        }

        const bodyData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
        }
        const loginData = await update(bodyData);
        localStorage.setItem('user', JSON.stringify(loginData.user.data));
        setState({
            ...state, "auth": {
                ...state.auth,
                "user": { ...loginData.user.data },
            }
        })
        if (!toast.isActive(formToast.current.login)) {
            formToast.current.login = toast.success("Profile updated!");
        }

    }

    return (
        <div>
            <Head>
                <title>Profile | Sense Hair</title>
                <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainMenu />
            <div className='pb-5' style={{ minHeight: '500px', paddingTop: '100px' }}>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-8 border rounded shadow p-4'>
                        <h1>{state.text.profileDetailsText}</h1>
                        <hr />
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
                                <input type="text" name="phone" className="form-control" id="inputPhone" placeholder={state.text.bookingPhonePlaceholder} value={formData.phone} onChange={(e) => setSetFromData({ ...formData, phone: e.target.value })} />
                            </div>

                            <a className="btn-next btn btn-dark" onClick={onSignup}>{state.text.saveChangesText}<BiRightArrowAlt className="ms-1" /></a>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;