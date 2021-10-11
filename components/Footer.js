/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-black text-white text-center text-md-start py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-5">
              <img loading="lazy" src="./images/logo2x.png" alt="logo2x" className="mb-3" width="60%" />
              <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem perspiciatis, assumenda placeat cum vel fugit.</p>
              <ul className="social-nav navbar-nav flex-row justify-content-center justify-content-md-start mb-4">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#"><FaFacebook /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#"><FaTwitter /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#"><FaInstagram /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#"><FaLinkedin /></a>
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <button className="btn-book-now btn btn-sm btn-primary rounded-0 font-weight-900">
                  <div className="d-inline-flex mw-100 h-auto">
                    <img loading="lazy" src="./images/schedule.png" height="42" alt="schedule" />
                  </div>
                  <span>BOOK NOW</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white active" href="./index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="./about.html">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="./services.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="./lookbook.html">Lookbook</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="./career.html">Career</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="./contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <h2>CONTACT</h2>
              <p className="font-weight-700">Address: House :134<br />Road 12, Netharland</p>
              <p>Info@sensehair.nl</p>
              <p>carlos@sensehair.nl</p>
              <h4>INFO</h4>
              <p>
                Sunday: 9AM-PM<br />
                Sunday: 9AM-PM<br />
                Sunday: 9AM-PM<br />
                Sunday: 9AM-PM<br />
                Sunday: 9AM-PM<br />
                Sunday: 9AM-PM<br />
                Sunday: 9AM-PM
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <h2>MAPS</h2>
              <div className="d-inline-flex mw-100 h-auto">
                <img loading="lazy" src="./images/map.png" alt="map" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="dream-diver" className="bg-dark text-white py-2">
        <div className="container">
          <p className="text-end mb-0">Developed by <a href="https://dreamdiver.nl/" rel="noreferrer" target="_blank" className="text-dreamDiver">DREAM DIVER</a></p>
        </div>
      </div>

    </>
  )
}

export default Footer
