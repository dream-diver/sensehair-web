import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

import imageClock from "../../public/images/clock.png";
import imageLocation from "../../public/images/location.png";
import imagePhoneCall from "../../public/images/phone-call.png";

/* eslint-disable @next/next/no-img-element */
const FormInfo = () => {
  const [state] = useContext(GlobalContext);
  return (
    <section id="form_info">
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <form action="#">
              <h1 className="text-center">CONTACT</h1>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="name"
                  id="name"
                  placeholder={state.text.contactUsFormName}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="email"
                  id="email"
                  placeholder={state.text.contactUsFormEmail}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="subject"
                  id="subject"
                  placeholder={state.text.contactUsFormSubject}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control rounded-0"
                  name="message"
                  id="message"
                  rows="3"
                  placeholder={state.text.contactUsFormMessage}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-dark rounded-0 px-4">
                  {state.text.submit}
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 font-1-3x d-flex flex-column justify-content-center py-5 align-items-center">
            <div className="d-flex">
              <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                <img
                  loading="lazy"
                  src={imageLocation.src}
                  alt="maps-and-flags"
                  width="20px"
                  className="mt-1"
                />
              </div>
              <div className="contact-text mb-3">
                <p className="d-inline-block">
                  <strong>Sense Hair</strong>
                  <br />
                  Central Plaza 12
                  <br />
                  3012CW Rotterdam,
                  <br />
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                <img
                  loading="lazy"
                  src={imagePhoneCall.src}
                  alt="phone-call"
                  width="20px"
                  className="mt-1"
                />
              </div>
              <div className="contact-text mb-3 d-flex align-items-center">
                <p className="mb-0">+31 01 042 591 95</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                <img
                  loading="lazy"
                  src={imageClock.src}
                  alt="phone-call"
                  width="20px"
                  className="mt-1"
                />
              </div>
              <div className="contact-text mb-3">
                <div className="d-flex">
                  <p className="text-center text-md-start me-2 me-sm-3 me-lg-5">
                    {/* { state.text.openingTimes1Day }<br /> */}
                    {state.text.openingTimes2Day}
                    <p></p>
                    {state.text.openingTimes3Day}
                    <p></p>
                    {state.text.openingTimes4Day}
                    <p></p>
                    {state.text.openingTimes5Day}
                    <p></p>
                    {state.text.openingTimes6Day}
                    <p></p>
                    {state.text.openingTimes7Day}
                  </p>
                  <p className="text-center text-md-start text-nowrap">
                    {/* { state.text.openingTimes1 }<br /> */}
                    {state.text.openingTimes2}
                    <p></p>
                    {state.text.openingTimes3}
                    <p></p>
                    {state.text.openingTimes4}
                    <p></p>
                    {state.text.openingTimes5}
                    <p></p>
                    {state.text.openingTimes6}
                    <p></p>
                    {state.text.openingTimes7}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormInfo;
