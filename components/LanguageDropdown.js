import { useContext } from "react"
import { GlobalContext } from "./contexts/GlobalContext"

import imageEn from "../public/images/english.png"
import imageNl from "../public/images/doutch.png"

/* eslint-disable @next/next/no-img-element */
const LanguageDropdown = ({ id, navToggle }) => {
  const [state] = useContext(GlobalContext)

  const english = (e) => {
    e.preventDefault()
    state.changeLanguage("en")
  }

  const dutch = (e) => {
    e.preventDefault()
    state.changeLanguage("nl")
  }
  return (
    <li className="language-dropdown nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id={ id } role="button" data-bs-toggle="dropdown" aria-expanded="false" >
        { state.locale == "en" ?
          <img loading="lazy" src={ imageEn.src } width="40" alt="english" />
          :
          <img loading="lazy" src={ imageNl.src } width="40" alt="doutch" />
        }
      </a>
      <ul className="dropdown-menu" aria-labelledby={ id }>
        <li>
          { navToggle ?
            <a className="dropdown-item" href="#" onClick={ state.locale == "en" ? dutch : english } data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <img loading="lazy" src={ state.locale == "en" ? "./images/doutch.png" : "./images/english.png" } width="40" alt={ state.locale == "en" ? "doutch" : "english" } />
            </a>
            :
            <a className="dropdown-item" href="#" onClick={ state.locale == "en" ? dutch : english }>
              <img loading="lazy" src={ state.locale == "en" ? "./images/doutch.png" : "./images/english.png" } width="40" alt={ state.locale == "en" ? "doutch" : "english" } />
            </a>
          }
        </li>
      </ul>
    </li>
  )
}

export default LanguageDropdown
