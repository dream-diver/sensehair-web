/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useRouter } from 'next/router'

import image1 from "../../public/images/services/1.png"
import image2 from "../../public/images/services/2.png"
import image3 from "../../public/images/services/3.png"
import image4 from "../../public/images/services/4.png"
import image5 from "../../public/images/services/5.png"
import image6 from "../../public/images/services/6.png"
import image7 from "../../public/images/services/7.png"
import image8 from "../../public/images/services/8.png"

import image1Hover from "../../public/images/services/11.png"
import image2Hover from "../../public/images/services/22.png"
import image3Hover from "../../public/images/services/33.png"
import image4Hover from "../../public/images/services/44.png"
import image5Hover from "../../public/images/services/55.png"
import image6Hover from "../../public/images/services/66.png"
import image7Hover from "../../public/images/services/77.png"
import image8Hover from "../../public/images/services/88.png"

const Prices = ({ activeHairSize, setActiveHairSize, activeHairType, setActiveHairType }) => {
  const [state] = useContext(GlobalContext)
  const [showHairType, setShowHairType] = useState(false)
  const hairTypeRef = useRef(null)
  const router = useRouter()
  const { hairSize } = router.query

  const scrollIntoViewOptions = { behavior: "smooth", block: "center", inline: "nearest" }


  const selectHairSize = (id) => {
    if (activeHairSize.length === 0) {
      id !== 0 && setShowHairType(!showHairType)
      if (activeHairSize.indexOf(id) === -1) {
        setActiveHairSize([...activeHairSize, id])
        if (hairTypeRef.current !== null && id !== 0) {
          hairTypeRef.current.scrollIntoView(scrollIntoViewOptions)
        }
      } else {
        setActiveHairSize(activeHairSize.filter(option => option !== id))
      }
    } else {
      setShowHairType(!showHairType)
      id === 0 ? setActiveHairSize([...activeHairType, 0]) : setActiveHairSize([])
    }
  }

  const selectHairType = (id) => {
    if (activeHairType.indexOf(id) === -1) {
      setActiveHairType([...activeHairType, id])
    } else {
      setActiveHairType(activeHairType.filter(option => option !== id))
    }
  }

  useEffect(() => {
    if (hairSize) {
      setActiveHairSize([...activeHairSize, parseInt(hairSize)])
      selectHairSize(parseInt(hairSize))
      setTimeout(() => {
        if (hairTypeRef.current !== null && parseInt(hairSize) !== 0) {
          hairTypeRef.current.scrollIntoView(scrollIntoViewOptions)
        }
      }, 3000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hairSize])

  return (
    <section id="prices">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 my-5">
            <div className="d-flex justify-content-center">
              <h1 className="h1-margin-bottom text-center">{ state.text.servicesPricesTitle }</h1>
            </div>
            <div className="prices-row prices-row-1 row text-center">
              <div className="col-6 col-md-3 mb-3">
                <div className={ activeHairSize.indexOf(0) !== -1 ? "card card-men px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card card-men px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairSize(0) } }>
                  <img src={ activeHairSize.indexOf(0) !== -1 ? image1.src : image1Hover.src } alt={ activeHairSize.indexOf(0) !== -1 ? "1.png" : "11.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">{ state.text.servicesMen }</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3 text-black visually-hidden">↳ Men Short Hire</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className={ activeHairSize.indexOf(1) !== -1 ? "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } onClick={ () => { selectHairSize(1) } }>
                  <img src={ activeHairSize.indexOf(1) !== -1 ? image2.src : image2Hover.src } alt={ activeHairSize.indexOf(0) !== -1 ? "2.png" : "22.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">{ state.text.servicesLadiesShort }</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3 text-black">↳ { state.text.servicesAboveShoulders }</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className={ activeHairSize.indexOf(2) !== -1 ? "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } onClick={ () => { selectHairSize(2) } }>
                  <img src={ activeHairSize.indexOf(2) !== -1 ? image3.src : image3Hover.src } alt={ activeHairSize.indexOf(0) !== -1 ? "3.png" : "33.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">{ state.text.servicesLadiesMidlong }</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3">↳ { state.text.servicesOnShoulders }</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className={ activeHairSize.indexOf(3) !== -1 ? "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } onClick={ () => { selectHairSize(3) } }>
                  <img src={ activeHairSize.indexOf(3) !== -1 ? image4.src : image4Hover.src } alt={ activeHairSize.indexOf(0) !== -1 ? "4.png" : "44.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">{ state.text.servicesLadiesLong }</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3">↳ { state.text.servicesOverShoulders }</p>
              </div>
            </div>
            <div className="prices-row-2-wrapper" ref={ hairTypeRef }>
              { showHairType &&
                <div className="prices-row prices-row-2 row text-center" >
                  <div className="col-12">
                    <p className="text-center font-1-5x my-4 font-weight-700">{ state.text.servicesWhatIsYourHairType }</p>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className={ activeHairType.indexOf(0) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(0) } }>
                      <div className="card-img p-2 px-md-4">
                        <img src={ activeHairType.indexOf(0) !== -1 ? image5Hover.src : image5.src } alt={ activeHairType.indexOf(0) !== -1 ? "55.png" : "5.png" } className="img-fluid" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <h1 className="text-black">{ state.text.servicesStraight }</h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className={ activeHairType.indexOf(1) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(1) } }>
                      <div className="card-img p-2 px-md-4">
                        <img src={ activeHairType.indexOf(1) !== -1 ? image6Hover.src : image6.src } alt={ activeHairType.indexOf(0) !== -1 ? "66.png" : "6.png" } className="img-fluid" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <h1 className="text-black">{ state.text.servicesWavy }</h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className={ activeHairType.indexOf(2) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(2) } }>
                      <div className="card-img p-2 px-md-4">
                        <img src={ activeHairType.indexOf(2) !== -1 ? image7Hover.src : image7.src } alt={ activeHairType.indexOf(0) !== -1 ? "77.png" : "7.png" } className="img-fluid" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <h1 className="text-black">{ state.text.servicesCurly }</h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className={ activeHairType.indexOf(3) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(3) } }>
                      <div className="card-img p-2 px-md-4">
                        <img src={ activeHairType.indexOf(3) !== -1 ? image8Hover.src : image8.src } alt={ activeHairType.indexOf(0) !== -1 ? "88.png" : "8.png" } className="img-fluid" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <h1 className="text-black">{ state.text.servicesFrizzy }</h1>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices
