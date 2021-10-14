/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const Team = () => {
  const [state] = useContext(GlobalContext)

  return (
    <section id="team" className="py-5 text-center">
      <div>
        <div className="owl-carousel-team owl-carousel owl-theme">
          <div className="row gx-0 text-white">
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
    </section>
  )
}

export default Team
