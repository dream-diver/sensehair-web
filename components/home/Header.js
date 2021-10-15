/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import MainMenu from '../MainMenu';

const Header = () => {
  const [state] = useContext(GlobalContext)
  return (
    <header id="header" className="vh-100">
      <MainMenu isSlider={ true } />
      <div id="homeHeader" className="d-flex vh-100">
        <div className="m-auto text-white text-center">
          <h1 className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">{ state.text.homeHeroTitle }</h1>
          <p className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">{ state.text.homeHeroSubtitle }</p>
          <button className="btn-book-now btn btn-primary rounded-0 font-weight-900 mx-auto" data-aos="fade-up" data-aos-duration="750" data-aos-delay="700" data-aos-once="true">
            <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
            <span>BOOK NOW</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
