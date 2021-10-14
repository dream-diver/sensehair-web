/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import MainMenu from "../MainMenu"

const Header = () => {
  const [state] = useContext(GlobalContext)

  return (
    <header id="header" className="lookbook-header">
      <MainMenu isSlider={ true } />
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-auto h-100 d-flex align-items-center">
            <div className="header-content text-black">
              <h1 className="font-weight-700 mb-1">{ state.text.lookbookHeroTitle }</h1>
              <p className="header-content-desc mb-5">{ state.text.lookbookHeroBody }</p>
              <div className="header-collapse ">
                <a className="header-collapse-link" data-bs-toggle="collapse" href="#collapseKLEUR" role="button" aria-expanded="false" aria-controls="collapseKLEUR">KLEUR <i className="fas fa-sort-down"></i></a>
                <div className="collapse" id="collapseKLEUR">
                  <ul className="header-collapse-nav nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">BRUNETTE</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">BLOND</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">ROOD</a>
                    </li>
                  </ul>
                </div>
                <a className="header-collapse-link" data-bs-toggle="collapse" href="#collapseLENGTES" role="button" aria-expanded="false" aria-controls="collapseLENGTES">LENGTES <i className="fas fa-sort-down"></i></a>
                <a className="header-collapse-link" data-bs-toggle="collapse" href="#collapseCOLLECTIES" role="button" aria-expanded="false" aria-controls="collapseCOLLECTIES">COLLECTIES <i className="fas fa-sort-down"></i></a>
                <a className="header-collapse-link" data-bs-toggle="collapse" href="#collapseHAIR" role="button" aria-expanded="false" aria-controls="collapseHAIR">HAIR-UP/AVANT GARDE <i className="fas fa-sort-down"></i></a>
                <a className="header-collapse-link" data-bs-toggle="collapse" href="#collapseMANNEN" role="button" aria-expanded="false" aria-controls="collapseMANNEN">MANNEN <i className="fas fa-sort-down"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
