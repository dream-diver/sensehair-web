/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import MainMenu from "../MainMenu"

const Header = () => {
  const [state] = useContext(GlobalContext)

  return (
    <header id="header" className="vh-60">
      <MainMenu isSlider={ true } />
      <div id="carouselHeader" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active vh-60">
            <img loading="lazy" src="./images/about/banner_about_us.png" alt="banner_about_us" />
            <div className="carousel-caption">
              <h1 className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">{ state.text.aboutHeroTitle }</h1>
            </div>
          </div>
          <div className="carousel-item vh-60">
            <img loading="lazy" src="./images/banner1.png" alt="banner1" />
          </div>
          <div className="carousel-item vh-60">
            <img loading="lazy" src="./images/banner1.png" alt="banner1" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
