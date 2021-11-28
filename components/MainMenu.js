/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import { FaPhoneAlt } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";
import { GlobalContext } from "./contexts/GlobalContext";

import imageLogoBig from '../public/images/logo2x.png';
import imageSchedule from '../public/images/schedule.png';

const Menu = ({ isSlider }) => {
  const [state] = useContext(GlobalContext)
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
            <img loading="lazy" src={ imageLogoBig.src } alt="logo2x" width="121px" className="navbar-brand-img d-inline-block align-text-top" ref={ navbarBrandImgRef } />
          </a>
        </Link>


        <form className="d-flex d-lg-none">
          <button className="btn btn-sm btn-light rounded-0 font-weight-900">{ state.text.bookNow }</button>
        </form>

        <div className="w-100">
          <div className="top-row row mb-1 d-none d-lg-block" ref={ topRowRef }>
            <div className="col d-flex">
              <ul id="top-menu" className="nav mx-auto mx-md-0 ms-md-auto">
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#"><FaPhoneAlt /> +31 10 123 456 78</a>
                </li>
                <LanguageDropdown id="navbarLang1" navToggle={ false } />
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className={ path == "/" ? "nav-link active" : "nav-link" }>{ state.text.menuHome }</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className={ path == "/about" ? "nav-link active" : "nav-link" }>{ state.text.menuAboutUs }</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services">
                      <a className={ path == "/services" ? "nav-link active" : "nav-link" }>{ state.text.menuServices }</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/lookbook">
                      <a className={ path == "/lookbook" ? "nav-link active" : "nav-link" }>{ state.text.menuLookbook }</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/career">
                      <a className={ path == "/career" ? "nav-link active" : "nav-link" }>{ state.text.menuCareer }</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className={ path == "/contact" ? "nav-link active" : "nav-link" }>{ state.text.menuContactUs }</a>
                    </Link>
                  </li>
                </ul>
                <ul className="nav-sm-only nav d-md-none">
                  <LanguageDropdown id="navbarLang2" navToggle={ true } />
                </ul>

                <form className="d-none d-lg-flex ms-lg-2">
                  <button className="btn-book-now btn btn-sm btn-primary rounded-0 font-weight-900">
                    <img loading="lazy" src={ imageSchedule.src } height="42" alt="schedule" />
                    <span>{ state.text.bookNow }</span>
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
