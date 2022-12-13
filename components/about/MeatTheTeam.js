import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import imageCarlos from '../../public/images/team/carlos.png'
import imageCheyenne from '../../public/images/team/Cheyenne.png'
import imageXavier from '../../public/images/team/Xavier.png'
import imageDjimila from '../../public/images/team/Djimila.png'
import imageSchedule from '../../public/images/schedule.png'

/* eslint-disable @next/next/no-img-element */
const MeatTheTeam = () => {
  const [state, setState] = useContext(GlobalContext)
  return (
    <section id="meat_the_team">
      <div className="container">
        <div className="row">
          <div className="col py-5">
            <h1 className="font-weight-700 text-end mb-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">{ state.text.aboutMeetTheTeam }</h1>

            <div className="team-row row py-5">
              <div className="col-md-5" data-aos="fade-right" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src={ imageCarlos.src } alt="Rectangle_team" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="text-white mb-0">Art Director</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-7 text-end py-3" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <h2 className="h2-margin-bottom">{ state.text.homeTeamTeam1Name }</h2>
                <p className="mb-4">{ state.text.homeTeamTeam1Body1 }</p>
                { state.text.homeTeamTeam1Body2 && <p className="mb-4">{ state.text.homeTeamTeam1Body2 }</p> }
                { state.text.homeTeamTeam1Body3 && <p className="mb-4">{ state.text.homeTeamTeam1Body3 }</p> }
              </div>
            </div>

            <div className="team-row row py-5">
              <div className="col-md-7 py-3" data-aos="fade-right" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <h2 className="h2-margin-bottom">{ state.text.homeTeamTeam2Name }</h2>
                <p className="mb-4">{ state.text.homeTeamTeam2Body1 }</p>
                { state.text.homeTeamTeam2Body2 && <p className="mb-4">{ state.text.homeTeamTeam2Body2 }</p> }
                { state.text.homeTeamTeam2Body3 && <p className="mb-4">{ state.text.homeTeamTeam2Body3 }</p> }
              </div>
              <div className="col-md-5" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src={ imageCheyenne.src } alt="Rectangle_team" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="text-white mb-0">HAIRSTYLIST</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-row row py-5">
              <div className="col-md-5" data-aos="fade-right" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src={ imageXavier.src } alt="Rectangle_team" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="text-white mb-0">HAIRSTYLIST</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-7 text-end py-3" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <h2 className="h2-margin-bottom">{ state.text.homeTeamTeam3Name }</h2>
                <p className="mb-4">{ state.text.homeTeamTeam3Body1 }</p>
                { state.text.homeTeamTeam3Body2 && <p className="mb-4">{ state.text.homeTeamTeam3Body2 }</p> }
                { state.text.homeTeamTeam3Body3 && <p className="mb-4">{ state.text.homeTeamTeam3Body3 }</p> }
              </div>
            </div>

            <div className="team-row row py-5">
              <div className="col-md-7 py-3" data-aos="fade-right" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <h2 className="h2-margin-bottom">{ state.text.homeTeamTeam4Name }</h2>
                <p className="mb-4">{ state.text.homeTeamTeam4Body1 }</p>
                { state.text.homeTeamTeam4Body2 && <p className="mb-4">{ state.text.homeTeamTeam4Body2 }</p> }
                { state.text.homeTeamTeam4Body3 && <p className="mb-4">{ state.text.homeTeamTeam4Body3 }</p> }
              </div>
              <div className="col-md-5" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src={ imageDjimila.src } alt="Rectangle_team" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="text-white mb-0">HAIRSTYLIST</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
              <button type="button" className="btn-book-now btn btn-primary rounded-0 font-weight-900" onClick={ () => setState({ ...state, showBooking: !state.showBooking }) }>
                <img loading="lazy" src={ imageSchedule.src } height="43" alt="schedule" />
                <span>{ state.text.bookNow }</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeatTheTeam
