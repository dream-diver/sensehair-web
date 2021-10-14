/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import MainMenu from '../MainMenu';

const Header = () => {
  const [state] = useContext(GlobalContext)
  return (
    <header id="header" className="vh-100">
      <MainMenu isSlider={ true } />
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
              <h1 className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">{ state.text.homeHeroTitle }</h1>
              <p className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">{ state.text.homeHeroSubtitle }</p>
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