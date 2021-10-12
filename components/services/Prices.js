/* eslint-disable @next/next/no-img-element */
const Prices = () => {
  return (
    <section id="prices">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 my-5">
            <div className="d-flex justify-content-center">
              <h1 className="h1-margin-bottom text-center">TARIEVEN</h1>
            </div>
            <div className="prices-row prices-row-1 row text-center">
              <div className="col-6 col-md-3 mb-3">
                <div className="card card-men px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" data-bs-toggle="modal" data-bs-target="#priceModal">
                  <img src="./images/services/11.png" alt="11.png" />
                  <img src="./images/services/1.png" alt="1.png" className="d-none" />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">MEN</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3 text-black visually-hidden">↳ Men Short Hire</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white">
                  <img src="./images/services/22.png" alt="2.png" />
                  <img src="./images/services/2.png" alt="2.png" className="d-none" />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">LADIES SHORT</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3 text-black">↳ Above Shoulders</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white">
                  <img src="./images/services/33.png" alt="33.png" />
                  <img src="./images/services/3.png" alt="3.png" className="d-none" />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">LADIES MID LONG</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3">↳ On Shoulders</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card card-row px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white">
                  <img src="./images/services/44.png" alt="4.png" />
                  <img src="./images/services/4.png" alt="4.png" className="d-none" />
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">LADIES LONG</h1>
                  </div>
                </div>
                <p className="mb-0 mt-3">↳ Over Shoulders</p>
              </div>
            </div>
            <div className="prices-row prices-row-2 row text-center d-none">
              <div className="col-12">
                <p className="text-center my-4 font-weight-700">What is your hair type?</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" data-bs-toggle="modal" data-bs-target="#priceModal">
                  <div className="bg-white p-2 px-md-4">
                    <img src="./images/services/55.png" alt="5.png" className="img-fluid" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">STRAIGHT</h1>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" data-bs-toggle="modal" data-bs-target="#priceModal">
                  <div className="bg-white p-2 px-md-4">
                    <img src="./images/services/66.png" alt="6.png" className="img-fluid" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">WAVY</h1>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" data-bs-toggle="modal" data-bs-target="#priceModal">
                  <div className="bg-white p-2 px-md-4">
                    <img src="./images/services/77.png" alt="7.png" className="img-fluid" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">CURLY</h1>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card px-3 pt-3 px-md-5 pt-md-5 pb-3 rounded-5 text-white" data-bs-toggle="modal" data-bs-target="#priceModal">
                  <div className="bg-white p-2 px-md-4">
                    <img src="./images/services/88.png" alt="8.png" className="img-fluid" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <h1 className="text-black">FRIZZY</h1>
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

export default Prices
