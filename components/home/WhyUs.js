import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

/* eslint-disable @next/next/no-img-element */
const WhyUs = () => {
  const [state] = useContext(GlobalContext)
  return (
    <section id="why-us" className="pt-5">
      <div className="container">
        <div className="row pt-5">
          <div className="col py-5 text-center">
            <h2 className="h1-margin-bottom font-weight-700">{ state.text.homeWhyUsTitle }</h2>
            <div className="row">
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/icon 1.png" alt="icon 1" />
                <h2 className="text-primary mt-3 mb-4">{ state.text.homeWhyUsSubtitle1 }</h2>
                <p>{ state.text.homeWhyUsBody1 }</p>
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/icon 2.png" alt="icon 2" />
                <h2 className="text-primary mt-3 mb-4">{ state.text.homeWhyUsSubtitle2 }</h2>
                <p>{ state.text.homeWhyUsBody2 }</p>
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/icon 3.png" alt="icon 3" />
                <h2 className="text-primary mt-3 mb-4">{ state.text.homeWhyUsSubtitle3 }</h2>
                <p>{ state.text.homeWhyUsBody3 }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
