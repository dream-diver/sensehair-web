/* eslint-disable @next/next/no-img-element */
const Award = () => {
  return (
    <section id="award" className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-white p-3">
            <div className="d-flex align-items-center justify-content-center border border-5 h-100">
              <p className="mb-0 font-weight-700">Our Brands:</p>
            </div>
          </div>
          <div className="award-col col-lg-6 d-flex justify-content-between flex-column flex-md-row py-3 px-4 px-lg-0">
            <div className="owl-carousel owl-carousel-icons">
              <div className="owl-carousel-icon d-flex align-items-center justify-content-center">
                <img loading="lazy" src="./images/award-coffure.png" alt="award-coffure" />
              </div>
              <div className="owl-carousel-icon d-flex align-items-center justify-content-center">
                <img loading="lazy" src="./images/award-keune-white.png" alt="award-keune-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Award
