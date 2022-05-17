import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { fetchServices, makePrice } from "../Helpers"
import imageSchedule from "../../public/images/schedule.png"
import imageAbout from "../../public/images/about/home-3-about.png"

/* eslint-disable @next/next/no-img-element */
const PriceModal = ({ activeHairSize, setActiveHairSize, activeHairType, setActiveHairType }) => {
  const [state, setState] = useContext(GlobalContext);
  const [ activeSize, setActive] = useState(null)
  const modalRef = useRef(null)
  const router = useRouter()
  const { hairSize } = router.query;

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
      if (parseInt(hairSize) === 0) {
        var priceModal = new bootstrap.Modal(document.getElementById('priceModal'), {})
        priceModal.show()
      }
    }, 3500)
  }, [hairSize])

  useEffect(() => {
    if (state.options.length !== 0 && activeHairSize.length !== 0) {
      const options = state.options
      const optionHairSize = options.find(option => option.name === "Hair Size").option
      const optionHairType = options.find(option => option.name === "Hair Type").option
      const hairSize = optionHairSize[activeHairSize[0]].name_fetch
      const hairType = optionHairType[activeHairType[0]] ? optionHairType[activeHairType[0]].name_fetch : ""
      setActive(hairSize);
      // alert(`Fetching...${hairSize} ${hairType}`);
      const getData = async () => {
        const data = await fetchServices(hairSize, hairType);
        if (data) {

          const servicesPre = data.data.map(service => service.data);
          let servicesGroup = {};
          if (state.locale === 'en') {
            servicesGroup = groupBy(servicesPre, 'category_en');
          }
          else{
            servicesGroup = groupBy(servicesPre, 'category');
          }
          const servicesList = [];
          for (let key in servicesGroup) {
            servicesList.push({ cat: key, data: servicesGroup[key] });
          }
          setState(prevState => {
            return { ...prevState, servicesList }
          })
          setTimeout(() => {
            var priceModal = new bootstrap.Modal(document.getElementById('priceModal'), {})
            if ((activeHairSize.length > 0 && activeHairType.length > 0) || activeHairSize[0] === 0) {
              priceModal.show()
            } else {
              priceModal.hide()
            }
          }, 100)
        }
      }
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeHairSize, activeHairType])
  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  return (
    <div className="modal fade show" ref={modalRef} id="priceModal" tabIndex="-1" aria-labelledby="priceModalLabel" aria-hidden="true" onClick={PriceModalClose}>
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="modal-header bg-black text-white">
            <h5 className="modal-title" id="priceModalLabel"> {`${state.servicesList ? state.locale === 'en' ? state.servicesList[0]?.data[0]?.hair_size : state.servicesList[0]?.data[0]?.hair_size_nl : ""} ${activeSize=='Men' ? "" :"&"} ${state.servicesList? state.locale === 'en' ? state.servicesList[0]?.data[0]?.hair_type ? state.servicesList[0]?.data[0]?.hair_type : "" : state.servicesList[0]?.data[0]?.hair_type_nl ? state.servicesList[0]?.data[0]?.hair_type_nl : "":""}`} </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={PriceModalClose}></button>
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table text-nowrap">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Hairstylist</th>
                    <th scope="col">Art Director</th>
                  </tr>
                </thead>
                <tbody>
                  {state.servicesList?.map((service, index) => (
                    <React.Fragment>
                      <tr key={index}>
                        <th scope="row">{service.cat}</th>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      {
                        service.data.map((data, index2) => (
                          <tr>

                            < td > { state.locale === 'en' ? data.name_en : data.name}</td>
                            < td > {data.duration} min</td>
                            <td>{makePrice(data.stylist_price)}</td>
                            <td>{makePrice(data.art_director_price)}</td>
                          </tr>
                        ))
                      }
                    </React.Fragment>

                  ))}
                </tbody>
              </table>
            </div>
            <section id="info_img">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 py-5">
                    <h4 className="font-weight-700 mb-3">STUDENTEN</h4>
                    <p className="">Ben je student: dan krijg je 10% korting op al onze behandelingen (ook beauty behandelingen). Sorry, helaas niet op onze producten. Studentenkorting geven wij op de maandag, dinsdag, woensdag en donderdag. Niet op koopavonden en de vrijdag en de zaterdag en uiteraard op vertoon van je studentenpas.</p>
                  </div>
                  <div className="col-md-4 py-5" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
                    <img loading="lazy" src={imageAbout.src} alt="home-3-about" className="img-fluid" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="modal-footer border-0">
            <div className="w-100 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
              <button type="button" className="btn-book-now btn btn-dark rounded-0 font-weight-900" onClick={() => setState({ ...state, showBooking: !state.showBooking })}>
                <img loading="lazy" src={imageSchedule.src} height="43" alt="schedule" />
                <span>{state.text.bookNow}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PriceModal
