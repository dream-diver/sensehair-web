import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

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

/* eslint-disable @next/next/no-img-element */
const Lookbook = () => {
  const [state] = useContext(GlobalContext)

  const lookbookImages = [
    imageLookbook1,
    imageLookbook2,
    imageLookbook3,
    imageLookbook4,
    imageLookbook5,
    imageLookbook6,
    imageLookbook7,
    imageLookbook8,
    imageLookbook9,
    imageLookbook10,
    imageLookbook11,
    imageLookbook12,
    imageLookbook13,
    imageLookbook14,
    imageLookbook15
  ]

  return (
    <section id="lookbook" className="lookbook">
      <div className="container">
        <div className="row">
          <div className="col py-5 text-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <h1 className="h1-margin-bottom font-weight-700">LOOKBOOK</h1>

            <div className="row">
              { lookbookImages.map((image, index) => (
                <div className="col-md-4 mb-3" key={ index }>
                  <img loading="lazy" src={ image.src } alt={ "Lookbook_" + index } className="img-fluid" />
                </div>
              )) }
            </div>

            <div className="w-100 d-flex flex-column align-items-center">
              <button className="btn-book-now btn btn-primary rounded-0 font-weight-900">
                <img loading="lazy" src="./images/schedule.png" height="42" alt="schedule" />
                <span>{ state.text.bookNow }</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lookbook
