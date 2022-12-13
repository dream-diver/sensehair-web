/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GlobalContext } from "./contexts/GlobalContext";

import imageLogoBig from "../public/images/logo2x.png";
import imageSchedule from "../public/images/schedule.png";

const Footer = () => {
  const [state, setState] = useContext(GlobalContext);
  return (
    <>
      <footer
        id="footer"
        className="bg-black text-white text-center text-md-start py-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-5">
              <img
                loading="lazy"
                src={imageLogoBig.src}
                alt="logo2x"
                className="mb-3"
                width="60%"
              />
              <p className="mb-4">{state.text.footerBody}</p>
              <ul className="social-nav navbar-nav flex-row justify-content-center justify-content-md-start mb-4">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="https://www.facebook.com/SENSEHAIRSTYLE/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link text-white" href="#"><FaTwitter /></a>
                </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="https://instagram.com/sensehairbycarlos"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link text-white" href="#"><FaLinkedin /></a>
                </li> */}
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <button
                  type="button"
                  className="btn-book-now btn btn-sm btn-primary rounded-0 font-weight-900"
                  onClick={() =>
                    setState({ ...state, showBooking: !state.showBooking })
                  }
                >
                  <div className="d-inline-flex mw-100 h-auto">
                    <img
                      loading="lazy"
                      src={imageSchedule.src}
                      height="42"
                      alt="schedule"
                    />
                  </div>
                  <span>{state.text.bookNow}</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link text-white active" href="#">
                      {state.text.menuHome}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link text-white" href="#">
                      {state.text.menuAboutUs}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link text-white" href="#">
                      {state.text.menuServices}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/lookbook">
                    <a className="nav-link text-white" href="#">
                      {state.text.menuLookbook}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/career">
                    <a className="nav-link text-white" href="#">
                      {state.text.menuCareer}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link text-white" href="#">
                      {state.text.menuContactUs}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <h2>CONTACT</h2>
              <p className="font-weight-700">
                Central Plaza 12
                <br />
                3012CW Rotterdam
              </p>
              <p>Info@sensehair.nl</p>
              <h4>INFO</h4>
              <div className="d-flex justify-content-center justify-content-md-start">
                <p className="text-center text-md-start me-3 me-xl-5">
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
                <p>
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
            <div className="col-md-6 col-lg-3 mb-3">
              <h2>MAPS</h2>
              <div className="d-inline-flex mw-100 h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.599657018382!2d4.470254515598512!3d51.92301488805075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434b9335c794b%3A0x3104eee3db8dcbbd!2sSense!5e0!3m2!1sen!2sbd!4v1633687510044!5m2!1sen!2sbd"
                  width="285px"
                  height="340px"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="dream-diver" className="bg-dark text-white py-2">
        <div className="container">
          <p className="text-end mb-0">
            Developed by{" "}
            <a
              href="https://dreamdiver.nl/"
              rel="noreferrer"
              target="_blank"
              className="text-dreamDiver"
            >
              DREAM DIVER
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
