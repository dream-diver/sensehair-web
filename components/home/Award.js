/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from 'embla-carousel-react'
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const Award = () => {
  const [state] = useContext(GlobalContext)
  const [viewportRef] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: "start",
    dragFree: true
  });
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
                  <div className="embla__slide d-flex justify-content-center">
                    <img loading="lazy" src="./images/award-coffure.png" alt="award-coffure" />
                  </div>
                  <div className="embla__slide d-flex justify-content-center">
                    <img loading="lazy" src="./images/award-keune-white.png" alt="award-keune-white" />
                  </div>
                  <div className="embla__slide d-flex justify-content-center">
                    <img loading="lazy" src="./images/award-coffure.png" alt="award-coffure" />
                  </div>
                  <div className="embla__slide d-flex justify-content-center">
                    <img loading="lazy" src="./images/award-keune-white.png" alt="award-keune-white" />
                  </div>
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
