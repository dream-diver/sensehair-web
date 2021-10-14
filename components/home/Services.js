/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const Services = () => {
  const [state] = useContext(GlobalContext)

  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col py-5 text-center">
            <h2 className="h1-margin-bottom font-weight-700" data-aos="fade-up" data-aos-duration="750" data-aos-delay="150" data-aos-once="true">{ state.text.homeServicesTitle }</h2>
            <p className="mb-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">Our Hair Salon is the place created for Men & women who appreciate high quality, perfect service and first-class look. Welcome to SENSE HAIR!</p>
            <div className="row mb-4 d-none d-md-flex">
              <div className="col-6 col-md-3" data-aos="fade-up" data-aos-duration="750" data-aos-delay="250" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src="./images/Haircut.png" alt="Haircut" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="mb-0">Haircut</h1>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3" data-aos="fade-up" data-aos-duration="750" data-aos-delay="350" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src="./images/Styling.png" alt="Styling" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="mb-0">Styling</h1>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3" data-aos="fade-up" data-aos-duration="750" data-aos-delay="450" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src="./images/Color.png" alt="Color" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="mb-0">Color</h1>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3" data-aos="fade-up" data-aos-duration="750" data-aos-delay="550" data-aos-once="true">
                <div className="img-overlay">
                  <img loading="lazy" src="./images/Color.png" alt="Color" className="img-fluid" />
                  <div className="overlay">
                    <h1 className="mb-0">Color</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-none">
              <div className="owl-carousel-services owl-carousel owl-theme">
                <div className="">
                  <div className="img-overlay">
                    <img loading="lazy" src="./images/Haircut.png" alt="Haircut" className="img-fluid" />
                    <div className="overlay">
                      <h1 className="mb-0">Haircut</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="img-overlay">
                    <img loading="lazy" src="./images/Styling.png" alt="Styling" className="img-fluid" />
                    <div className="overlay">
                      <h1 className="mb-0">Styling</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="img-overlay">
                    <img loading="lazy" src="./images/Color.png" alt="Color" className="img-fluid" />
                    <div className="overlay">
                      <h1 className="mb-0">Color</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="img-overlay">
                    <img loading="lazy" src="./images/Color.png" alt="Color" className="img-fluid" />
                    <div className="overlay">
                      <h1 className="mb-0">Color</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="w-100 d-flex flex-column align-items-center">
              <button className="btn-find btn btn-lg btn-outline-dark rounded-0 font-weight-900 mb-3" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">All Services</button>
              <button className="btn-book-now btn btn-lg btn-primary rounded-0 font-weight-900" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">
                <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
                <span>BOOK NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
