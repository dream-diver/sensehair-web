/* eslint-disable @next/next/no-img-element */
const FormInfo = () => {
  return (
    <section id="form_info">
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <form action="#">
              <h1 className="text-center">CONTACT</h1>
              <div className="mb-3">
                <input type="text" className="form-control rounded-0" name="name" id="name" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control rounded-0" name="email" id="email" placeholder="Email Address" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control rounded-0" name="subject" id="subject" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control rounded-0" name="message" id="message" rows="3" placeholder="Message"></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-dark rounded-0 px-4">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 font-1-3x d-flex flex-column justify-content-center py-5 align-items-center">
            <div className="d-flex">
              <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                <img loading="lazy" src="./images/location.png" alt="maps-and-flags" width="20px" className="mt-1" />
              </div>
              <div className="contact-text mb-3">
                <p className="d-inline-block">
                  <strong>Sense Hair</strong><br />
                  Central Plaza 12<br />
                  3012CW Rotterdam,<br />
                  <span className="small">One Minute from<br />central station</span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                <img loading="lazy" src="./images/phone-call.png" alt="phone-call" width="20px" className="mt-1" />
              </div>
              <div className="contact-text mb-3 d-flex align-items-center">
                <p className="mb-0">+31 10 123 456 78</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-3 mb-3 d-flex justify-content-center align-items-start">
                <img loading="lazy" src="./images/clock.png" alt="phone-call" width="20px" className="mt-1" />
              </div>
              <div className="contact-text mb-3">
                <p className="small mb-1">Tuesday 9:00 – 20:00</p>
                <p className="small mb-1">Wednesday 9.00 – 20:00</p>
                <p className="small mb-1">Thursday 9:00 – 22:00</p>
                <p className="small mb-1">Friday 9:00 – 22:00</p>
                <p className="small mb-1">Saturday 8:00 – 22:00</p>
                <p className="small mb-1">Sunday 10:00 – 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormInfo
