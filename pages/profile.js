import React, { useState, useContext, useEffect, useRef } from 'react';
import Footer from "../components/Footer";
import MainMenu from '../components/MainMenu';
import Head from 'next/head';
import { GlobalContext } from '../components/contexts/GlobalContext';
import { toast } from "react-toastify";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import axios from 'axios';

function Profile() {
    const [state, setState] = useContext(GlobalContext);
    const [formData, setSetFromData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const [bookings, setBookings] = useState([])
    const [bookingToDelete, setBookingToDelete] = useState(null);

    const formToast = useRef({
        name: null,
        email: null,
        validMail: null,
        password: null,
        login: null,
        phone: null
    })

    useEffect(() => {
        if (state.auth.isLogin) {
            setSetFromData({ ...formData, name: state.auth.user.name, email: state.auth.user.email, phone: state.auth.user.phone });
            getBookings(state.auth.user.id);
        }
        else if (localStorage.getItem("login") == "true") {
            const user = JSON.parse(localStorage.getItem("user"));
            setSetFromData({ ...formData, name: user.name, email: user.email, phone: user.phone });
            getBookings(user.id);
        }
    }, [])

    const fetchPaymentIntent = async (bookingId, amount) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${bookingId}/getPaymentIntent?amount=${amount}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const data = await getTextFromStream(response.body)
            return data
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    const getTextFromStream = async (readableStream) => {
        let reader = readableStream.getReader()
        let utf8Decoder = new TextDecoder()
        let nextChunk

        let resultStr = ''

        while (!(nextChunk = await reader.read()).done) {
            let partialData = nextChunk.value
            resultStr += utf8Decoder.decode(partialData)
        }

        return resultStr
    }

    const getPaymentIntent = async (bookingId, amount, bookingResponse) => {
        const paymentIntentFromServer = await fetchPaymentIntent(bookingId, amount)
        if (typeof paymentIntentFromServer === 'string' && paymentIntentFromServer.startsWith('pi_')) {
            setState({ ...state, showBooking: true, currentStep: 8, paymentIntent: paymentIntentFromServer });
            // setSteps({
            //     ...steps,
            //     "step7": { ...steps.step7, active: false, booking: bookingResponse },
            //     "step8": { ...steps.step8, paymentIntent: paymentIntentFromServer, active: true }
            // })
        } else {
            console.log('Payment Intent Error')
        }
    }
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
    const getBookings = async (customer_id) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings?customer_id=${customer_id}&limit=all`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${state.auth.token || localStorage.getItem("token")}`,
                },
            })
            const data = await response.json();
            if (data.data.length) {
                setBookings(data.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const cancelBooking = async () => {
        if (bookingToDelete) {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/cancel`, { booking_id: bookingToDelete.id }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => {
                    closeConfirmModal();
                    deleteBookingFromList();
                })
                .catch(err => {
                    alert("An error occurred! Please try again!");
                    closeConfirmModal();
                })
        }
    }

    const closeConfirmModal = () => {
        const myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('bookingCancelConfirm'));
        myModal.hide();
    }

    const showConfirmModal = () => {
        const myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('bookingCancelConfirm'));
        myModal.show();
    }

    const deleteBookingFromList = () => {
        const tmp = bookings.filter(e => e.data.id != bookingToDelete.id);
        setBookings(tmp);
        setBookingToDelete(null);
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
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-home" aria-selected="true">{state.text.profileDetailsText}</button>
                                <button className="nav-link" style={{ textTransform: 'uppercase' }} id="nav-booking-tab" data-bs-toggle="tab" data-bs-target="#nav-booking" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">{state.text.Bookings}</button>
                            </div>
                        </nav>
                        <div className="tab-content mt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
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
                            <div className="tab-pane fade" id="nav-booking" role="tabpanel" aria-labelledby="nav-booking-tab">
                                <h1>{state.text.Bookings}</h1>
                                <div className='table-responsive'>
                                    <table className='table table-light'>
                                        <thead>

                                            <tr>
                                                <th> {state.text.bookingDateTime} </th>
                                                <th> {state.text.bookingServices} </th>
                                                <th> {state.text.bookingDuration} </th>
                                                <th> {state.text.stylist} </th>
                                                <th> {state.text.bookingTotalPrice} </th>
                                                <th> {state.text.Status} </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map((booking, index) => (
                                                <tr key={index}>
                                                    <td> {booking.data.booking_time} </td>
                                                    <td> {booking.data.services?.map((service, index2) => (
                                                        <div key={index2}> {state.locale == 'en' ? service.data.name_en : service.data.name} </div>
                                                    ))} </td>
                                                    <td> {booking.data.duration} min </td>
                                                    <td> {booking.data.server?.data.name} </td>
                                                    <td> {`€${parseInt(booking.data.charge).toFixed(2)}`} </td>
                                                    <td >
                                                        {booking.data.payment_status} {booking.data.payment_status == "Unpaid" &&
                                                            <React.Fragment>
                                                                <button onClick={() => getPaymentIntent(booking.data.id, booking.data.charge, booking.data)} className='btn btn-sm btn-success ms-2'> {state.text.bookingPayNow} </button>
                                                                <button onClick={() => { setBookingToDelete(booking.data); showConfirmModal() }} className='btn btn-sm btn-link ms-2'> Cancel </button>
                                                            </React.Fragment>
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div id='bookingCancelConfirm' className="modal fade" tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"> {state.text.bookingCancelConfirmTitle} </h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>{state.text.bookingCancelConfirmBody}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{state.text.confirmNo}</button>
                                                <button onClick={cancelBooking} type="button" className="btn btn-success">{state.text.confirmYes}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
}

export default Profile;