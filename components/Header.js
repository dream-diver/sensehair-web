/* eslint-disable @next/next/no-img-element */
import { FaPhoneAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header id="header" className="vh-100">
      <nav id="main-menu" className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand me-0" href="./index.html">
            <img loading="lazy" src="./images/logo2x.png" alt="logo2x" width="121px" className="navbar-brand-img d-inline-block align-text-top" />
          </a>

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
                      <a className="nav-link active" href="./index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./about.html">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./services.html">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./lookbook.html">Lookbook</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./career.html">Career</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./contact.html">Contact Us</a>
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
      <div id="carouselHeader" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-indicators d-none">
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active vh-100">
            <img loading="lazy" src="./images/banner1.png" alt="banner1" />
            <div className="carousel-caption">
              <h1 className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">Only THE BEST TEAM FOR YOUR HAIR</h1>
              <p className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">For fresh cuts, styling and coloring, our team is up to date with the latest trends and techniques. Your wishes are key by Sense Hair.</p>
              <button className="btn-book-now btn btn-primary rounded-0 font-weight-900 mx-auto" data-aos="fade-up" data-aos-duration="750" data-aos-delay="700" data-aos-once="true">
                <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
                <span>BOOK NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
