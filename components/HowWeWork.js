/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'

const HowWeWork = () => {
  const [state] = useContext(GlobalContext)

  return (
    <section id="how-we-work">
      <div className="container">
        <div className="row">
          <div className="col py-5">
            <h2 className="h1-margin-bottom font-weight-700" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500" data-aos-once="true">{ state.text.howWeWorkTitle }</h2>
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <p className="heading font-weight-700 mb-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500" data-aos-once="true">{ state.text.howWeWorkQuote }</p>
                <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500" data-aos-once="true">{ state.text.howWeWorkBody1 }</p>
                <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500" data-aos-once="true">{ state.text.howWeWorkBody2 }</p>
                <p className="text-black-50" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500" data-aos-once="true">{ state.text.howWeWorkBody3 }</p>
                <p className="mb-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500" data-aos-once="true">{ state.text.howWeWorkBody4 }</p>
                <button className="btn-yes btn btn-lg btn-primary text-white font-weight-700 font-1-5x px-5 py-2" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1700" data-aos-once="true">{ state.text.howWeWorkButton }</button>
              </div>
              <div className="col-md-6">
                <div className="timeline">
                  <div className="timeline-item timeline-item-start d-flex pb-3">
                    <div className="timeline-line">
                      <div className="timeline-line-hover"></div>
                    </div>
                    <div className="flex-shrink-1 d-flex align-items-center me-3">
                      <div className="timeline-circle rounded-circle text-white d-flex align-items-center justify-content-center">1</div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="timeline-box rounded-4 p-3">
                        <div className="timeline-box-arrow"></div>
                        <p className="h3 font-weight-700">{ state.text.howWeWorkStep1Title }</p>
                        <p>{ state.text.howWeWorkStep1Body }</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item d-flex pb-3">
                    <div className="timeline-line">
                      <div className="timeline-line-hover"></div>
                    </div>
                    <div className="flex-shrink-1 d-flex align-items-center me-3">
                      <div className="timeline-circle rounded-circle text-white d-flex align-items-center justify-content-center">2</div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="timeline-box rounded-4 p-3">
                        <div className="timeline-box-arrow"></div>
                        <p className="h3 font-weight-700">{ state.text.howWeWorkStep2Title }</p>
                        <p>{ state.text.howWeWorkStep2Body }</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-end d-flex pb-3">
                    <div className="timeline-line">
                      <div className="timeline-line-hover"></div>
                    </div>
                    <div className="flex-shrink-1 d-flex align-items-center me-3">
                      <div className="timeline-circle rounded-circle text-white d-flex align-items-center justify-content-center">3</div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="timeline-box rounded-4 p-3">
                        <div className="timeline-box-arrow"></div>
                        <p className="h3 font-weight-700">{ state.text.howWeWorkStep3Title }</p>
                        <p>{ state.text.howWeWorkStep3Body }</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork