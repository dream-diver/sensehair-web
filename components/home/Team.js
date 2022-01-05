/* eslint-disable @next/next/no-img-element */
import { useCallback, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import useEmblaCarousel from 'embla-carousel-react'
import DotButton from '../slider/DotButton'
import Link from 'next/link'

import imageCarlos from '../../public/images/team/carlos.png'
import imageCheyenne from '../../public/images/team/Cheyenne.png'
import imageXavier from '../../public/images/team/Xavier.png'
import imageDjimila from '../../public/images/team/Djimila.png'

const Team = () => {
  const [state] = useContext(GlobalContext)
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <section id="team" className="py-5 text-center">
      <div>
        <div className="embla">
          <div className="embla__viewport" ref={ viewportRef }>
            <div className="embla__container">

              <div className="embla__slide">
                <div className=" row gx-0 text-white">
                  <div className="col-md-6">
                    <img loading="lazy" src={ imageCarlos.src } alt="team 1" className="img-fluid" />
                  </div>
                  <div className="col-md-6 bg-black d-flex flex-column justify-content-center align-items-center pt-5 pt-md-3 py-3 px-2 px-md-5">
                    <div className="team-text flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                      <h1 className="font-weight-700">{ state.text.homeTeamTeam1Title }</h1>
                      <p className="mb-4">{ state.text.homeTeamTeam1Body1 }</p>
                      { state.text.homeTeamTeam1Body2 && <p className="mb-4">{ state.text.homeTeamTeam1Body2 }</p> }
                      { state.text.homeTeamTeam1Body3 && <p className="mb-4">{ state.text.homeTeamTeam1Body3 }</p> }
                      <Link href="/about#meat_the_team"><button className="btn btn-light btn-lg font-weight-900 text-uppercase">{ state.text.homeTeamTeam1Button }</button></Link>
                    </div>
                    <p className="font-handwriting my-3">{ state.text.homeTeamTeam1Name }</p>
                  </div>
                </div>
              </div>

              <div className="embla__slide">
                <div className="row gx-0 text-white">
                  <div className="col-md-6">
                    <img loading="lazy" src={ imageCheyenne.src } alt="team 2" className="img-fluid" />
                  </div>
                  <div className="col-md-6 bg-black d-flex flex-column justify-content-center align-items-center py-3 px-5">
                    <div className="team-text flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                      <h1 className="font-weight-700">{ state.text.homeTeamTeam2Title }</h1>
                      <p className="mb-4">{ state.text.homeTeamTeam2Body1 }</p>
                      { state.text.homeTeamTeam2Body2 && <p className="mb-4">{ state.text.homeTeamTeam2Body2 }</p> }
                      { state.text.homeTeamTeam2Body3 && <p className="mb-4">{ state.text.homeTeamTeam2Body3 }</p> }
                      <Link href="/about#meat_the_team"><button className="btn btn-light btn-lg font-weight-900 text-uppercase">{ state.text.homeTeamTeam2Button }</button></Link>
                    </div>
                    <p className="font-handwriting my-3">{ state.text.homeTeamTeam2Name }</p>
                  </div>
                </div>
              </div>

              <div className="embla__slide">
                <div className="row gx-0 text-white">
                  <div className="col-md-6">
                    <img loading="lazy" src={ imageXavier.src } alt="team 3" className="img-fluid" />
                  </div>
                  <div className="col-md-6 bg-black d-flex flex-column justify-content-center align-items-center py-3 px-5">
                    <div className="team-text flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                      <h1 className="font-weight-700">{ state.text.homeTeamTeam3Title }</h1>
                      <p className="mb-4">{ state.text.homeTeamTeam3Body1 }</p>
                      { state.text.homeTeamTeam3Body2 && <p className="mb-4">{ state.text.homeTeamTeam3Body2 }</p> }
                      <Link href="/about#meat_the_team"><button className="btn btn-light btn-lg font-weight-900 text-uppercase">{ state.text.homeTeamTeam3Button }</button></Link>
                    </div>
                    <p className="font-handwriting my-3">{ state.text.homeTeamTeam3Name }</p>
                  </div>
                </div>
              </div>

              <div className="embla__slide">
                <div className="row gx-0 text-white">
                  <div className="col-md-6">
                    <img loading="lazy" src={ imageDjimila.src } alt="team 4" className="img-fluid" />
                  </div>
                  <div className="col-md-6 bg-black d-flex flex-column justify-content-center align-items-center py-3 px-5">
                    <div className="team-text flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                      <h1 className="font-weight-700">{ state.text.homeTeamTeam4Title }</h1>
                      <p className="mb-4">{ state.text.homeTeamTeam4Body1 }</p>
                      { state.text.homeTeamTeam4Body2 && <p className="mb-4">{ state.text.homeTeamTeam4Body2 }</p> }
                      { state.text.homeTeamTeam4Body3 && <p className="mb-4">{ state.text.homeTeamTeam4Body3 }</p> }
                      <Link href="/about#meat_the_team"><button className="btn btn-light btn-lg font-weight-900 text-uppercase">{ state.text.homeTeamTeam4Button }</button></Link>
                    </div>
                    <p className="font-handwriting my-3">{ state.text.homeTeamTeam4Name }</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
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
    </section>
  )
}

export default Team
