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
    executeScroll(e.target.getAttribute("href").substring(1).trim())
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
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#DAMES" role="button" aria-expanded="false" aria-controls="collapseKLEUR">{ state.text.lookbookMenu1 } <FaAngleDown className="ms-1" /></a>
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#KLEUR" role="button" aria-expanded="false" aria-controls="collapseLENGTES">{ state.text.lookbookMenu2 } <FaAngleDown className="ms-1" /></a>
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#HEREN" role="button" aria-expanded="false" aria-controls="collapseCOLLECTIES">{ state.text.lookbookMenu3 } <FaAngleDown className="ms-1" /></a>
                <a className="header-collapse-link" onClick={ onClickFunction } data-bs-toggle="collapse" href="#COLLECTIES" role="button" aria-expanded="false" aria-controls="collapseMANNEN">{ state.text.lookbookMenu4 } <FaAngleDown className="ms-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
