/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { GlobalContext } from '../contexts/GlobalContext'
import MainMenu from "../MainMenu"

const Header = ({ showAll, setShowAll, executeScroll }) => {
  const [state] = useContext(GlobalContext)

  const onClickFunction = (e) => {
    e.preventDefault()
    setShowAll(true)
    executeScroll(e.target.text.trim())
  }

  return (
    <header id="header" className="lookbook-header">
      <MainMenu isSlider={ true } />
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-auto h-100 d-flex align-items-center">
            <div className="header-content text-black">
              <h1 className="font-weight-700 mb-1">{ state.text.lookbookHeroTitle }</h1>
              <p className="header-content-desc">{ state.text.lookbookHeroBody }</p>
              <div className="header-collapse ">
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#collapseKLEUR" role="button" aria-expanded="false" aria-controls="collapseKLEUR">DAMES <FaAngleDown className="ms-1" /></a>
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#collapseLENGTES" role="button" aria-expanded="false" aria-controls="collapseLENGTES">KLEUR <FaAngleDown className="ms-1" /></a>
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#collapseCOLLECTIES" role="button" aria-expanded="false" aria-controls="collapseCOLLECTIES">HEREN <FaAngleDown className="ms-1" /></a>
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#collapseMANNEN" role="button" aria-expanded="false" aria-controls="collapseMANNEN">COLLECTIES <FaAngleDown className="ms-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
