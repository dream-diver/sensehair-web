/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

import imageLookbook1 from '../../public/images/lookbook/Lookbook1.png'
import imageLookbook2 from '../../public/images/lookbook/Lookbook2.png'
import imageLookbook3 from '../../public/images/lookbook/Lookbook3.png'
import imageLookbook4 from '../../public/images/lookbook/Lookbook4.png'
import imageLookbook5 from '../../public/images/lookbook/Lookbook5.png'
import imageLookbook6 from '../../public/images/lookbook/Lookbook6.png'
import imageLookbook7 from '../../public/images/lookbook/Lookbook7.png'
import imageLookbook8 from '../../public/images/lookbook/Lookbook8.png'
import imageLookbook9 from '../../public/images/lookbook/Lookbook9.png'
import imageLookbook10 from '../../public/images/lookbook/Lookbook10.png'
import imageLookbook11 from '../../public/images/lookbook/Lookbook11.png'
import imageLookbook12 from '../../public/images/lookbook/Lookbook12.png'
import imageLookbook13 from '../../public/images/lookbook/Lookbook13.png'
import imageLookbook14 from '../../public/images/lookbook/Lookbook14.png'
import imageLookbook15 from '../../public/images/lookbook/Lookbook15.png'
import imageLookbook16 from '../../public/images/lookbook/Lookbook16.png'
import imageLookbook17 from '../../public/images/lookbook/Lookbook17.png'
import imageLookbook18 from '../../public/images/lookbook/Lookbook18.png'
import imageLookbook19 from '../../public/images/lookbook/Lookbook19.png'
import imageLookbook20 from '../../public/images/lookbook/Lookbook20.png'
import imageLookbook21 from '../../public/images/lookbook/Lookbook21.png'
import imageLookbook22 from '../../public/images/lookbook/Lookbook22.png'
import imageLookbook23 from '../../public/images/lookbook/Lookbook23.png'
import imageLookbook24 from '../../public/images/lookbook/Lookbook24.png'
import imageLookbook25 from '../../public/images/lookbook/Lookbook25.png'
import imageLookbook26 from '../../public/images/lookbook/Lookbook26.png'
// import imageLookbook27 from '../../public/images/lookbook/Lookbook27.png'
import imageLookbook28 from '../../public/images/lookbook/Lookbook28.png'
import imageLookbook29 from '../../public/images/lookbook/Lookbook29.png'
import imageLookbook30 from '../../public/images/lookbook/Lookbook30.png'
import imageLookbook31 from '../../public/images/lookbook/Lookbook31.png'
import imageLookbook32 from '../../public/images/lookbook/Lookbook32.png'
import imageLookbook33 from '../../public/images/lookbook/Lookbook33.png'
import imageLookbook34 from '../../public/images/lookbook/Lookbook34.png'
import imageLookbook35 from '../../public/images/lookbook/Lookbook35.png'
import imageLookbook36 from '../../public/images/lookbook/Lookbook36.png'
import imageLookbook37 from '../../public/images/lookbook/Lookbook37.png'
import imageLookbook38 from '../../public/images/lookbook/Lookbook38.png'
import imageLookbook39 from '../../public/images/lookbook/Lookbook39.png'
import imageLookbook40 from '../../public/images/lookbook/Lookbook40.png'
import imageLookbook41 from '../../public/images/lookbook/Lookbook41.png'
import imageLookbook42 from '../../public/images/lookbook/Lookbook42.png'
import imageLookbook43 from '../../public/images/lookbook/Lookbook43.png'
import imageLookbook44 from '../../public/images/lookbook/Lookbook44.png'
import imageLookbook45 from '../../public/images/lookbook/Lookbook45.png'
import imageLookbook47 from '../../public/images/lookbook/Lookbook47.png'
import imageLookbook48 from '../../public/images/lookbook/Lookbook48.png'
import imageLookbook49 from '../../public/images/lookbook/Lookbook49.png'

const LookbookAll = ({ lookbookAllRef, damesRef, kleurRef, herenRef, collectiesRef }) => {
  const [state] = useContext(GlobalContext)
  const lookbookDames = [
    imageLookbook1,
    imageLookbook2,
    imageLookbook4,
    imageLookbook5,
    imageLookbook7,
    imageLookbook13,
    imageLookbook14,
    imageLookbook15,
    imageLookbook19,
    imageLookbook20,
    imageLookbook21,
    imageLookbook24,
    imageLookbook25,
    imageLookbook26,
    imageLookbook30,
    imageLookbook37,
    imageLookbook38,
    imageLookbook42,
    imageLookbook43,
    imageLookbook44,
    imageLookbook49,
    imageLookbook8,
    imageLookbook11,
    imageLookbook12,
    imageLookbook16,
    imageLookbook17,
    imageLookbook18,
    imageLookbook22,
    imageLookbook23,
    // imageLookbook27,
    imageLookbook28,
    imageLookbook29,
    imageLookbook35,
    imageLookbook40,
    imageLookbook41,
    // imageLookbook46,
    imageLookbook47,
    imageLookbook48,
  ]
  const lookbookKleur = [
    imageLookbook2,
    imageLookbook4,
    imageLookbook5,
    imageLookbook14,
    imageLookbook20,
    imageLookbook24,
    imageLookbook25,
    imageLookbook26,
    imageLookbook30,
    imageLookbook31,
    imageLookbook32,
    imageLookbook36,
    imageLookbook37,
    imageLookbook38,
  ]
  const lookbookHeren = [
    imageLookbook31,
    imageLookbook32,
    imageLookbook36,
    imageLookbook3,
    imageLookbook6,
    imageLookbook9,
    imageLookbook10,
    imageLookbook33,
    imageLookbook34,
    imageLookbook39,
    imageLookbook45,
  ]
  const lookbookCollecties = [
    imageLookbook3,
    imageLookbook6,
    imageLookbook8,
    imageLookbook9,
    imageLookbook10,
    imageLookbook11,
    imageLookbook12,
    imageLookbook16,
    imageLookbook17,
    imageLookbook18,
    imageLookbook22,
    imageLookbook23,
    // imageLookbook27,
    imageLookbook28,
    imageLookbook29,
    imageLookbook33,
    imageLookbook34,
    imageLookbook35,
    imageLookbook39,
    imageLookbook40,
    imageLookbook41,
    imageLookbook45,
    // imageLookbook46,
    imageLookbook47,
    imageLookbook48,
  ]
  return (
    <section id="lookbook" className="lookbook_all" ref={ lookbookAllRef }>
      <div className="container">
        <div className="row">
          <div id="myDiv" className="col py-5 text-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <h1 id="KLEUR" className="h1-margin-bottom" ref={ damesRef }>LOOKBOOK - <b>{ state.text.lookbookMenu1 }</b></h1>

            <div className="row">
              { lookbookDames.map((image, index) => (
                <div className="col-md-4 mb-3" key={ index }>
                  <img loading="lazy" src={ image.src } alt={ "Lookbook_" + index } className="img-fluid" />
                </div>
              )) }
            </div>

            <h1 id="KLEUR" className="h1-margin-bottom mt-5" ref={ kleurRef }>LOOKBOOK - <b>{ state.text.lookbookMenu2 }</b></h1>

            <div className="row">
              { lookbookKleur.map((image, index) => (
                <div className="col-md-4 mb-3" key={ index }>
                  <img loading="lazy" src={ image.src } alt={ "Lookbook_" + index } className="img-fluid" />
                </div>
              )) }
            </div>

            <h1 id="LENGTES" className="h1-margin-bottom mt-5" ref={ herenRef }>LOOKBOOK - <b>{ state.text.lookbookMenu3 }</b></h1>

            <div className="row">
              { lookbookHeren.map((image, index) => (
                <div className="col-md-4 mb-3" key={ index }>
                  <img loading="lazy" src={ image.src } alt={ "Lookbook_" + index } className="img-fluid" />
                </div>
              )) }
            </div>

            <h1 id="COLLECTIES" className="h1-margin-bottom mt-5" ref={ collectiesRef }>LOOKBOOK - <b>{ state.text.lookbookMenu4 }</b></h1>

            <div className="row">
              { lookbookCollecties.map((image, index) => (
                <div className="col-md-4 mb-3" key={ index }>
                  <img loading="lazy" src={ image.src } alt={ "Lookbook_" + index } className="img-fluid" />
                </div>
              )) }
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default LookbookAll
