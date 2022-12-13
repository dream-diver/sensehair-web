import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
const Info = () => {
  const [state] = useContext(GlobalContext)

  return (
    <section id="info">
      <div className="container">
        <div className="row">
          <div className="col py-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <h1 className="font-weight-700 mb-3">Sense Hair</h1>
            <p className="font-1-3x">{ state.text.careerInfoBody1 }</p>
            <p className="font-1-3x">{ state.text.careerInfoBody2 }</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
