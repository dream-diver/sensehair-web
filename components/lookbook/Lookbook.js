import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

/* eslint-disable @next/next/no-img-element */
const Lookbook = () => {
  const [state] = useContext(GlobalContext)
  return (
    <section id="lookbook" className="lookbook">
      <div className="container">
        <div className="row">
          <div className="col py-5 text-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <h1 className="h1-margin-bottom font-weight-700">LOOKBOOK</h1>

            <div className="row">
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_1.png" alt="Lookbook_1" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_2.png" alt="Lookbook_2" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_3.png" alt="Lookbook_3" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_4.png" alt="Lookbook_4" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_5.png" alt="Lookbook_5" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_6.png" alt="Lookbook_6" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_7.png" alt="Lookbook_7" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_8.png" alt="Lookbook_8" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_9.png" alt="Lookbook_9" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_10.png" alt="Lookbook_10" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_11.png" alt="Lookbook_11" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_12.png" alt="Lookbook_12" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_13.png" alt="Lookbook_13" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_14.png" alt="Lookbook_14" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/lookbook/Lookbook_15.png" alt="Lookbook_15" className="img-fluid" />
              </div>
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
