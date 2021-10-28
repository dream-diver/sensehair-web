import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import imageCarlos from '../../public/images/team/carlos.png'


/* eslint-disable @next/next/no-img-element */
const MeatTheTeam = () => {
  const [state] = useContext(GlobalContext)
  return (
    <section id="meat_the_team">
      <div className="container">
        <div className="row">
          <div className="col py-5">
            <h1 className="font-weight-700 text-end mb-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">MEAT THE TEAM</h1>
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
                <h2 className="h2-margin-bottom">CARLOS</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dicta fugit voluptatum? Numquam doloribus, adipisci, aliquid odit perspiciatis iste ipsam totam porro sed dignissimos eveniet distinctio minima nam, fuga suscipit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolores suscipit, unde deleniti consequatur ipsam totam placeat repellat dicta commodi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cumque.</p>
              </div>
            </div>
            <div className="team-row row py-5">
              <div className="col-md-7 py-3" data-aos="fade-right" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <h2 className="h2-margin-bottom">CARLOS</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dicta fugit voluptatum? Numquam doloribus, adipisci, aliquid odit perspiciatis iste ipsam totam porro sed dignissimos eveniet distinctio minima nam, fuga suscipit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolores suscipit, unde deleniti consequatur ipsam totam placeat repellat dicta commodi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cumque.</p>
              </div>
              <div className="col-md-5" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src={ imageCarlos.src } alt="Rectangle_team" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="text-white mb-0">Art Director</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
              <button className="btn-book-now btn btn-primary rounded-0 font-weight-900">
                <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
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
