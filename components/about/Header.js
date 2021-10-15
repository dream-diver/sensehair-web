/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import MainMenu from "../MainMenu"

const Header = () => {
  const [state] = useContext(GlobalContext)

  return (
    <header id="header" className="vh-60">
      <MainMenu isSlider={ true } />
      <div id="aboutHeader" className="d-flex vh-60">
        <div className="m-auto text-white text-center">
          <h1 className="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">{ state.text.aboutHeroTitle }</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
