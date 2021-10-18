/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import { FaPhoneAlt } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";

const Menu = ({ isSlider }) => {
  const mainMenuRef = useRef(null)
  const topRowRef = useRef(null)
  const navbarBrandImgRef = useRef(null)
  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = () => {
      if (!mainMenuRef.current) {
        return;
      }
      if (window.scrollY === 0) {
        mainMenuRef.current.classList.remove('navbar-shrink');
        topRowRef.current.classList.add('d-lg-block');
        navbarBrandImgRef.current.setAttribute("width", "121px");
      } else {
        mainMenuRef.current.classList.add('navbar-shrink');
        topRowRef.current.classList.remove('d-lg-block');
        navbarBrandImgRef.current.setAttribute("width", "71px");

      }
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
  }, [])

  return (
    <nav id="main-menu" className={ isSlider ? "navbar navbar-expand-lg navbar-dark" : "navbar navbar-expand-lg navbar-dark bg-black without-slider" } ref={ mainMenuRef }>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link href="/">
          <a className="navbar-brand me-0">
            <img loading="lazy" src="./images/logo2x.png" alt="logo2x" width="121px" className="navbar-brand-img d-inline-block align-text-top" ref={ navbarBrandImgRef } />
          </a>
        </Link>


        <form className="d-flex d-lg-none">
          <button className="btn btn-sm btn-light rounded-0 font-weight-900">BOOK NOW</button>
        </form>

        <div className="w-100">
          <div className="top-row row mb-1 d-none d-lg-block" ref={ topRowRef }>
            <div className="col d-flex">
              <ul id="top-menu" className="nav mx-auto mx-md-0 ms-md-auto">
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#"><FaPhoneAlt /> +31 10 123 456 78</a>
                </li>
                <LanguageDropdown />
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className={ path == "/" ? "nav-link active" : "nav-link" }>Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className={ path == "/about" ? "nav-link active" : "nav-link" }>About Us</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services">
                      <a className={ path == "/services" ? "nav-link active" : "nav-link" }>Services</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/lookbook">
                      <a className={ path == "/lookbook" ? "nav-link active" : "nav-link" }>Lookbook</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/career">
                      <a className={ path == "/career" ? "nav-link active" : "nav-link" }>Career</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className={ path == "/contact" ? "nav-link active" : "nav-link" }>Contact Us</a>
                    </Link>
                  </li>
                </ul>
                <ul className="nav-sm-only nav d-md-none">
                  <LanguageDropdown />
                </ul>

                <form className="d-none d-lg-flex ms-lg-2">
                  <button className="btn-book-now btn btn-sm btn-primary rounded-0 font-weight-900">
                    <img loading="lazy" src="./images/schedule.png" height="42" alt="schedule" />
                    <span>BOOK NOW</span>
                  </button>
                </form>
              </div>
            </div>
          </div >
        </div >
      </div >
    </nav >
  )
}

export default Menu
