/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import MainMenu from '../MainMenu'

import imageSchedule from '../../public/images/schedule.png'

const Header = () => {
  const [state, setState] = useContext(GlobalContext)
  return (
    <header id="header" className="vh-100">
      <MainMenu isSlider={ true } />
      <div id="homeHeader" className="d-flex vh-100">
        <div className="m-auto text-white text-center">
          <h1 className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">{ state.text.homeHeroTitle }</h1>
          <p className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="700" data-aos-once="true">{ state.text.homeHeroSubtitle }</p>
          <button type="button" className="btn-book-now btn btn-primary rounded-0 font-weight-900 mx-auto" onClick={ () => setState({ ...state, showBooking: !state.showBooking }) } data-aos="fade-up" data-aos-duration="750" data-aos-delay="900" data-aos-once="true">
            <img loading="lazy" src={ imageSchedule.src } height="43" alt="schedule" />
            <span>{ state.text.bookNow }</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
