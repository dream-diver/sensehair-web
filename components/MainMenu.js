/* eslint-disable @next/next/no-img-element */
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link'

const Menu = ({ isSlider }) => {
  return (
    <nav id="main-menu" className={ isSlider ? "navbar navbar-expand-lg navbar-dark" : "navbar navbar-expand-lg navbar-dark bg-black without-slider" }>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link href="/">
          <a className="navbar-brand me-0">
            <img loading="lazy" src="./images/logo2x.png" alt="logo2x" width="121px" className="navbar-brand-img d-inline-block align-text-top" />
          </a>
        </Link>


        <form className="d-flex d-lg-none">
          <button className="btn btn-sm btn-light rounded-0 font-weight-900">BOOK NOW</button>
        </form>

        <div className="w-100">
          <div className="top-row row mb-1 d-none d-lg-block">
            <div className="col d-flex">
              <ul id="top-menu" className="nav mx-auto mx-md-0 ms-md-auto">
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#"><FaPhoneAlt /> +31 10 123 456 78</a>
                </li>
                <li className="language-dropdown nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarLang" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img loading="lazy" src="./images/english.png" width="40" alt="english" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarLang">
                    <li className="d-none">
                      <a className="dropdown-item" href="#">
                        <img loading="lazy" src="./images/english.png" width="40" alt="english" />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img loading="lazy" src="./images/doutch.png" width="40" alt="doutch" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link active">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className="nav-link">About Us</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services">
                      <a className="nav-link">Services</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/lookbook">
                      <a className="nav-link">Lookbook</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/career">
                      <a className="nav-link">Career</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>
                </ul>

                <form className="d-none d-lg-flex ms-lg-2">
                  <button className="btn-book-now btn btn-sm btn-primary rounded-0 font-weight-900">
                    <img loading="lazy" src="./images/schedule.png" height="42" alt="schedule" />
                    <span>BOOK NOW</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
