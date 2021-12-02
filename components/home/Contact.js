import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  const [state, setState] = useContext(GlobalContext)

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 text-center py-5">
            <div className="contact-container">
              <div className="contact-row d-flex flex-column flex-md-row justify-content-between text-start mb-4">
                <div className="me-md-5">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                      <img loading="lazy" src="./images/clock.png" alt="clock" width="20px" className="mt-1" />
                    </div>
                    <div className="mb-3 flex-grow-1">
                      <p className="text-center text-md-start">
                        { state.text.openingTimes1 }<br />
                        { state.text.openingTimes2 }<br />
                        { state.text.openingTimes3 }<br />
                        { state.text.openingTimes4 }<br />
                        { state.text.openingTimes5 }<br />
                        { state.text.openingTimes6 }<br />
                        { state.text.openingTimes7 }
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                      <img loading="lazy" src="./images/location.png" alt="maps-and-flags" width="20px" className="mt-1" />
                    </div>
                    <div className="mb-3 flex-grow-1">
                      <p className="text-center text-md-start">
                        <strong>Sense Hair</strong><br />
                        Central Plaza 12<br />
                        3012TW Rotterdam<br />
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                      <img loading="lazy" src="./images/phone-call.png" alt="phone-call" width="20px" className="mt-1" />
                    </div>
                    <div className="mb-3 flex-grow-1">
                      <p className="text-center text-md-start mb-0">+31 10 123 456 78</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <p className="text-center mb-5">{ state.text.homeContactBody }</p>

          <div className="w-100 d-flex justify-content-center">
            <button type="button" className="btn-book-now btn btn-primary rounded-0 font-weight-900" onClick={ () => setState({ ...state, showBooking: !state.showBooking }) }>
              <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
              <span>{ state.text.bookNow }</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
