/* eslint-disable @next/next/no-img-element */
import { useCallback, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import useEmblaCarousel from 'embla-carousel-react'

const Team = () => {
  const [state] = useContext(GlobalContext)
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <section id="team" className="py-5 text-center">
      <div>
        <div className="embla">
          <div className="embla__viewport" ref={ viewportRef }>
            <div className="embla__container">

              <div className="embla__slide">
                <div className=" row gx-0 text-white">
                  <div className="col-md-6">
                    <img loading="lazy" src="./images/team 1.png" alt="team 1" className="img-fluid" />
                  </div>
                  <div className="col-md-6 bg-black d-flex flex-column justify-content-center align-items-center pt-5 pt-md-3 py-3 px-2 px-md-5">
                    <div className="team-text flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                      <h1 className="font-weight-700">{ state.text.homeTeamTeam1Title }</h1>
                      <p className="mb-4">{ state.text.homeTeamTeam1Body }</p>
                      <button className="btn btn-light btn-lg font-weight-900 text-uppercase">{ state.text.homeTeamTeam1Button }</button>
                    </div>
                    <p className="font-handwriting my-3">Carlos Ramos</p>
                  </div>
                </div>
              </div>

              <div className="embla__slide">
                <div className="row gx-0 text-white">
                  <div className="col-md-6">
                    <img loading="lazy" src="./images/team 1.png" alt="team 1" className="img-fluid" />
                  </div>
                  <div className="col-md-6 bg-black d-flex flex-column justify-content-center align-items-center py-3 px-5">
                    <div className="team-text flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                      <h1 className="font-weight-700">{ state.text.homeTeamTeam2Title }</h1>
                      <p className="mb-4">{ state.text.homeTeamTeam2Body }</p>
                      <button className="btn btn-light btn-lg font-weight-900 text-uppercase">{ state.text.homeTeamTeam2Button }</button>
                    </div>
                    <p className="font-handwriting my-3">Hande Erçel</p>
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
const DotButton = ({ selected, onClick }) => (
  <button
    className={ `embla__dot ${selected ? "is-selected" : ""}` }
    type="button"
    onClick={ onClick }
  />
);

export default Team
