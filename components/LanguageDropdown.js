import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

/* eslint-disable @next/next/no-img-element */
const LanguageDropdown = () => {
  const [state] = useContext(GlobalContext)

  const english = (e) => {
    e.preventDefault();
    state.changeLanguage("en");
  }

  const dutch = (e) => {
    e.preventDefault();
    state.changeLanguage("nl");
  }
  return (
    <li className="language-dropdown nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarLang" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
        { state.locale == "en" ?
          <img loading="lazy" src="./images/english.png" width="40" alt="english" />
          :
          <img loading="lazy" src="./images/doutch.png" width="40" alt="doutch" />
        }
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarLang">
        { state.locale == "en" ?
          <li>
            <a className="dropdown-item navbar-toggler" href="#" onClick={ dutch } data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <img loading="lazy" src="./images/doutch.png" width="40" alt="doutch" />
            </a>
          </li>
          :
          <li>
            <a className="dropdown-item navbar-toggler" href="#" onClick={ english } data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <img loading="lazy" src="./images/english.png" width="40" alt="english" />
            </a>
          </li>
        }
      </ul>
    </li>
  )
}

export default LanguageDropdown
