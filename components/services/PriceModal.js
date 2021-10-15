/* eslint-disable @next/next/no-img-element */
const PriceModal = ({ activeHairSize, setActiveHairSize, setActiveHairType }) => {

  const PriceModalClose = (e) => {
    if (e.target.classList.contains("btn-close") || e.target.classList.contains("modal")) {
      setActiveHairType([])
      if (activeHairSize.indexOf(0) !== -1) {
        setActiveHairSize(activeHairSize.filter(option => option !== 0))
      }
    }
  }

  return (
    <div className="modal fade" id="priceModal" tabIndex="-1" aria-labelledby="priceModalLabel" aria-hidden="true" onClick={ PriceModalClose }>
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="modal-header bg-black text-white">
            <h5 className="modal-title" id="priceModalLabel">Knippen & Stylen</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={ PriceModalClose }></button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Service 1</th>
                  <th scope="col">Service 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Dames</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td scope="row">Knippen/Föhnen</td>
                  <td>€ 58,00</td>
                  <td>€ 58,00</td>
                </tr>
                <tr>
                  <td scope="row">Wassen/Föhnen v.a.</td>
                  <td>€ 38,00</td>
                  <td>€ 58,00</td>
                </tr>
                <tr>
                  <th scope="row">HEREN</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td scope="row">Wassen/Knippen</td>
                  <td>€ 45,00</td>
                  <td>€ 45,00</td>
                </tr>
                <tr>
                  <td scope="row">Haircolor for men v.a.</td>
                  <td>€ 25,00</td>
                  <td>€ 25,00</td>
                </tr>
                <tr>
                  <td scope="row">BARBER behandelingen v.a.</td>
                  <td>€ 27,00</td>
                  <td>€ 25,00</td>
                </tr>
                <tr>
                  <th scope="row">KINDEREN</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td scope="row">0 t/m 12 jaar</td>
                  <td>€ 40,00</td>
                  <td>€ 25,00</td>
                </tr>
              </tbody>
            </table>
            <section id="info_img">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 py-5">
                    <h4 className="font-weight-700 mb-3">STUDENTEN</h4>
                    <p className="">Ben je student: dan krijg je 10% korting op al onze behandelingen (ook beauty behandelingen). Sorry, helaas niet op onze producten. Studentenkorting geven wij op de maandag, dinsdag, woensdag en donderdag. Niet op koopavonden en de vrijdag en de zaterdag en uiteraard op vertoon van je studentenpas.</p>
                  </div>
                  <div className="col-md-4 py-5" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                    <img loading="lazy" src="./images/about/home-3-about.png" alt="home-3-about" className="img-fluid" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="modal-footer border-0">
            <div className="w-100 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
              <button className="btn-book-now btn btn-dark rounded-0 font-weight-900">
                <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
                <span>BOOK NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceModal
