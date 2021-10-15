/* eslint-disable @next/next/no-img-element */
const Lookbook = () => {
  return (
    <section id="lookbook">
      <div className="container">
        <div className="row">
          <div className="col py-5 text-center" data-aos="fade-up" data-aos-duration="1750" data-aos-delay="3000" data-aos-once="true">
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
              <div className="col-md-4 mb-3 d-none d-md-block">
                <img loading="lazy" src="./images/lookbook/Lookbook_4.png" alt="Lookbook_4" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3 d-none d-md-block">
                <img loading="lazy" src="./images/lookbook/Lookbook_5.png" alt="Lookbook_5" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3 d-none d-md-block">
                <img loading="lazy" src="./images/lookbook/Lookbook_6.png" alt="Lookbook_6" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3 d-none d-md-block">
                <img loading="lazy" src="./images/lookbook/Lookbook_7.png" alt="Lookbook_7" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3 d-none d-md-block">
                <img loading="lazy" src="./images/lookbook/Lookbook_8.png" alt="Lookbook_8" className="img-fluid" />
              </div>
              <div className="col-md-4 mb-3 d-none d-md-block">
                <img loading="lazy" src="./images/lookbook/Lookbook_9.png" alt="Lookbook_9" className="img-fluid" />
              </div>
            </div>

            <div className="w-100 d-flex flex-column align-items-center">
              <button className="btn-find btn btn-lg btn-outline-dark rounded-0 font-weight-900 mb-3">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lookbook
