/* eslint-disable @next/next/no-img-element */
const Contact = () => {
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
                        Tuesday 9:00 – 20:00<br />
                        Wednesday 9.00 – 20:00<br />
                        Thursday 9:00 – 22:00<br />
                        Friday 9:00 – 22:00<br />
                        Saterday 8:00 – 22:00<br />
                        Sunday 10:00 – 22:00<br />
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
          <p className="mb-5">Ben je op zoek naar een kapper in Rotterdam Centrum? Wij zitten op 5 min lopen van Centraal. Met de auto parkeer je gemakkelijk in parkeergarage. Schouwburgplein, plaza zijde’ en loop je binnen 1 minuut onze salon binnen. Bel, boek gemakkelijk online of loop binnen zonder afspraak</p>

          <div className="w-100 d-flex justify-content-center">
            <button className="btn-book-now btn btn-primary rounded-0 font-weight-900">
              <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
              <span>BOOK NOW</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
