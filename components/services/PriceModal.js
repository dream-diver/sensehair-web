import { useRouter } from 'next/router'
import { useContext, useEffect, useRef } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { fetchServices } from "../Helpers"
import imageSchedule from "../../public/images/schedule.png"
import imageAbout from "../../public/images/about/home-3-about.png"

/* eslint-disable @next/next/no-img-element */
const PriceModal = ({ activeHairSize, setActiveHairSize, activeHairType, setActiveHairType }) => {
  const [state, setState] = useContext(GlobalContext)
  const modalRef = useRef(null)
  const router = useRouter()
  const { hairSize } = router.query

  const PriceModalClose = (e) => {
    if (e.target.classList.contains("btn-close") || e.target.classList.contains("modal")) {
      setActiveHairType([])
      if (activeHairSize.indexOf(0) !== -1) {
        setActiveHairSize(activeHairSize.filter(option => option !== 0))
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      var priceModal = new bootstrap.Modal(document.getElementById('priceModal'), {})
      if (parseInt(hairSize) === 0) {
        priceModal.show()
      }
    }, 3000)
  }, [hairSize])

  useEffect(() => {
    if (activeHairSize.length === 0 && activeHairType.length === 0) {
      let hairSize = ""
      let hairType = ""
      if (activeHairSize.indexOf(0) === 0) {
        hairSize = "Men"
      } else if (activeHairSize.indexOf(0) === 1) {
        hairSize = "Women Short Hair"
      } else if (activeHairSize.indexOf(0) === 2) {
        hairSize = "Women Medium Hair"
      } else if (activeHairSize.indexOf(0) === 3) {
        hairSize = "Women Long Hair"
      }
      if (activeHairType.indexOf(0) === 0) {
        hairType = "Straight"
      } else if (activeHairType.indexOf(0) === 1) {
        hairType = "Wavy"
      } else if (activeHairType.indexOf(0) === 2) {
        hairType = "Curly"
      } else if (activeHairType.indexOf(0) === 3) {
        hairType = "Coily"
      }
      const getData = async () => {
        const data = await fetchServices(hairSize, hairType)
        if (data) {
          const services = data.data.map(service => service.data)
          setState(prevState => {
            return { ...prevState, services }
          })
        }
      }
      getData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeHairSize, activeHairType])

  return (
    <div className="modal fade show" ref={ modalRef } id="priceModal" tabIndex="-1" aria-labelledby="priceModalLabel" aria-hidden="true" onClick={ PriceModalClose }>
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
                  <th scope="col"></th>
                  <th scope="col">Hairstylist</th>
                  <th scope="col">Art Director</th>
                </tr>
              </thead>
              <tbody>
                { state.services.map((service, index) => (
                  <tr key={ index }>
                    <th scope="row">{ service.name }</th>
                    <td>{ service.duration } min</td>
                    <td>${ service.stylist_price }</td>
                    <td>${ service.art_director_price }</td>
                  </tr>
                )) }
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
                    <img loading="lazy" src={ imageAbout.src } alt="home-3-about" className="img-fluid" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="modal-footer border-0">
            <div className="w-100 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
              <button type="button" className="btn-book-now btn btn-dark rounded-0 font-weight-900" onClick={ () => setState({ ...state, showBooking: !state.showBooking }) }>
                <img loading="lazy" src={ imageSchedule.src } height="43" alt="schedule" />
                <span>{ state.text.bookNow }</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceModal
