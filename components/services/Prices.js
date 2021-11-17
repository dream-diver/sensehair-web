/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const Prices = ({ activeHairSize, setActiveHairSize, activeHairType, setActiveHairType }) => {
  const [state] = useContext(GlobalContext)
  const [showHairType, setShowHairType] = useState(false)

  const selectHairSize = (id) => {
    if (activeHairSize.length === 0) {
      id !== 0 && setShowHairType(!showHairType)
      if (activeHairSize.indexOf(id) === -1) {
        setActiveHairSize([...activeHairSize, id])
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
                  <img src={ activeHairSize.indexOf(0) !== -1 ? "./images/services/1.png" : "./images/services/11.png" } alt={ activeHairSize.indexOf(0) !== -1 ? "1.png" : "11.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">MEN</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3 text-black visually-hidden">↳ Men Short Hire</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className={ activeHairSize.indexOf(1) !== -1 ? "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } onClick={ () => { selectHairSize(1) } }>
                  <img src={ activeHairSize.indexOf(1) !== -1 ? "./images/services/2.png" : "./images/services/22.png" } alt={ activeHairSize.indexOf(0) !== -1 ? "2.png" : "22.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">LADIES SHORT</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3 text-black">↳ Above Shoulders</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className={ activeHairSize.indexOf(2) !== -1 ? "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } onClick={ () => { selectHairSize(2) } }>
                  <img src={ activeHairSize.indexOf(2) !== -1 ? "./images/services/3.png" : "./images/services/33.png" } alt={ activeHairSize.indexOf(0) !== -1 ? "3.png" : "33.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">LADIES MID LONG</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3">↳ On Shoulders</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className={ activeHairSize.indexOf(3) !== -1 ? "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } onClick={ () => { selectHairSize(3) } }>
                  <img src={ activeHairSize.indexOf(3) !== -1 ? "./images/services/4.png" : "./images/services/44.png" } alt={ activeHairSize.indexOf(0) !== -1 ? "4.png" : "44.png" } />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">LADIES LONG</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3">↳ Over Shoulders</p>
              </div>
            </div>
            { showHairType &&
              <div className="prices-row prices-row-2 row text-center">
                <div className="col-12">
                  <p className="text-center font-1-5x my-4 font-weight-700">What is your hair type?</p>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className={ activeHairType.indexOf(0) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(0) } }>
                    <div className="card-img p-2 px-md-4">
                      <img src={ activeHairType.indexOf(0) !== -1 ? "./images/services/55.png" : "./images/services/5.png" } alt={ activeHairType.indexOf(0) !== -1 ? "55.png" : "5.png" } className="img-fluid" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-grow-1">
                      <h1 className="text-black">STRAIGHT</h1>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className={ activeHairType.indexOf(1) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(1) } }>
                    <div className="card-img p-2 px-md-4">
                      <img src={ activeHairType.indexOf(1) !== -1 ? "./images/services/66.png" : "./images/services/6.png" } alt={ activeHairType.indexOf(0) !== -1 ? "66.png" : "6.png" } className="img-fluid" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-grow-1">
                      <h1 className="text-black">WAVY</h1>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className={ activeHairType.indexOf(2) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(2) } }>
                    <div className="card-img p-2 px-md-4">
                      <img src={ activeHairType.indexOf(2) !== -1 ? "./images/services/77.png" : "./images/services/7.png" } alt={ activeHairType.indexOf(0) !== -1 ? "77.png" : "7.png" } className="img-fluid" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-grow-1">
                      <h1 className="text-black">CURLY</h1>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className={ activeHairType.indexOf(3) !== -1 ? "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white active" : "card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" } data-bs-toggle="modal" data-bs-target="#priceModal" onClick={ () => { selectHairType(3) } }>
                    <div className="card-img p-2 px-md-4">
                      <img src={ activeHairType.indexOf(3) !== -1 ? "./images/services/88.png" : "./images/services/8.png" } alt={ activeHairType.indexOf(0) !== -1 ? "88.png" : "8.png" } className="img-fluid" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-grow-1">
                      <h1 className="text-black">FRIZZY</h1>
                    </div>
                  </div>
                </div>
              </div>
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices