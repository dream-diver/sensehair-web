/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useContext, useDebugValue, useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

import imageBrand1 from '../../public/images/brands/award-coffure.png'
// import imageBrand2 from '../../public/images/brands/award-keune-white.png'
import imageBrand3 from '../../public/images/brands/keratherapy.png'
import imageBrand4 from '../../public/images/brands/kevinmurphy.png'
import imageBrand5 from '../../public/images/brands/redken.png'
import imageBrand6 from '../../public/images/brands/olaplex.png'

const Award = () => {
  const [state] = useContext(GlobalContext)
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: "start",
    dragFree: true
  })

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  useEffect(() => {
    if (!embla) return
    setInterval(() => {
      scrollNext()
    }, 3000)
  }, [embla, scrollNext])
  const brandImages = [
    // imageBrand2,
    imageBrand4,
    imageBrand3,
    imageBrand5,
    imageBrand1,
    imageBrand6,
  ]
  return (
    <section id="award" className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-white p-3">
            <div className="d-flex align-items-center justify-content-center border border-5 h-100">
              <p className="mb-0 font-weight-700 text-uppercase">{ state.text.homeAwardTitle }:</p>
            </div>
          </div>
          <div className="award-col col-lg-6 py-3 px-4 px-lg-0">
            <div className="embla">
              <div className="embla__viewport" ref={ viewportRef }>
                <div className="embla__container">

                  { brandImages.map((image, index) => (
                    <div className="embla__slide d-flex justify-content-center" key={ index }>
                      <img loading="lazy" src={ image.src } alt="award-coffure" />
                    </div>
                  )) }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Award
