/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useCallback, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import useEmblaCarousel from 'embla-carousel-react'
import DotButton from '../slider/DotButton'
import PrevButton from '../slider/PrevButton'
import NextButton from '../slider/NextButton'

import imageMen from '../../public/images/services/services-men.jpg'
import imageLadiesShort from '../../public/images/services/services-ladies-short-straight.jpg'
import imageLadiesMidlong from '../../public/images/services/service-ladies-midlong-straight.jpg'
import imageLadiesLong from '../../public/images/services/services-ladies-long-wavy.jpg'
import imageSchedule from '../../public/images/schedule.png'

const Services = () => {
  const [state] = useContext(GlobalContext)
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])

  // All Services Array
  const allServices = [
    {
      name: state.text.servicesMen,
      image: imageMen
    },
    {
      name: state.text.servicesLadiesShort,
      image: imageLadiesShort
    },
    {
      name: state.text.servicesLadiesMidlong,
      image: imageLadiesMidlong
    },
    {
      name: state.text.servicesLadiesLong,
      image: imageLadiesLong
    }
  ]

  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col py-5 text-center">
            <h2 className="h1-margin-bottom font-weight-700" data-aos="fade-up" data-aos-duration="750" data-aos-delay="150" data-aos-once="true">{ state.text.homeServicesTitle }</h2>
            <p className="mb-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">{ state.text.homeServicesBody }</p>
            <div className="row mb-4 d-none d-md-flex">
              { allServices.map((service, index) => (
                <Link href="/services" key={ index }>
                  <div className="col-6 col-md-3 cursor-pointer" data-aos="fade-up" data-aos-duration="750" data-aos-delay="250" data-aos-once="true">
                    <div className="img-overlay">
                      <img loading="lazy" src={ service.image.src } alt={ service.name } className="img-fluid" />
                      <div className="overlay">
                        <h1 className="mb-0">{ service.name }</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              )) }
            </div>
            <div className="d-md-none">
              <div className="embla">
                <div className="embla__viewport" ref={ viewportRef }>
                  <div className="embla__container">
                    { allServices.map((service, index) => (
                      <Link href="/services" key={ index }>
                        <div className="embla__slide cursor-pointer">
                          <div className="img-overlay">
                            <img loading="lazy" src={ service.image.src } alt={ service.name } className="img-fluid" />
                            <div className="overlay">
                              <h1 className="mb-0">{ service.name }</h1>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )) }
                  </div>
                </div>
                <PrevButton onClick={ scrollPrev } enabled={ prevBtnEnabled } />
                <NextButton onClick={ scrollNext } enabled={ nextBtnEnabled } />
              </div>
              <div className="embla__dots">
                { scrollSnaps.map((_, index) => (
                  <DotButton
                    key={ index }
                    selected={ index === selectedIndex }
                    onClick={ () => scrollTo(index) }
                  />
                )) }
              </div>
            </div>


            <div className="w-100 d-flex flex-column align-items-center">
              <Link href="/services">
                <button type="button" className="btn-w btn-find btn btn-lg btn-outline-dark rounded-0 font-weight-900 mb-3" data-aos="fade-up" data-aos-duration="750" data-aos-delay="700" data-aos-once="true">{ state.text.allServices }</button>
              </Link>
              <button type="button" className="btn-w btn-book-now btn btn-lg btn-primary rounded-0 font-weight-900" onClick={ () => setState({ ...state, showBooking: !state.showBooking }) } data-aos="fade-up" data-aos-duration="750" data-aos-delay="900" data-aos-once="true">
                <img loading="lazy" src={ imageSchedule.src } height="43" alt="schedule" />
                <span className="flex-grow-1">{ state.text.bookNow }</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
