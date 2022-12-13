import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const InfoListText = () => {
  const [state] = useContext(GlobalContext)
  return (
    <section id="info_list_text">
      <div className="container">
        <div className="row">
          <div className="col py-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <h1 className="font-weight-700 mb-3">{ state.text.careerInfoListTextTitle }</h1>
            <ul className="font-1-3x">
              <li className="mb-3">{ state.text.careerInfoListTextItem1 }</li>
              <li className="mb-3">{ state.text.careerInfoListTextItem2 }</li>
              <li className="mb-3">{ state.text.careerInfoListTextItem3 }</li>
              <li className="mb-3">{ state.text.careerInfoListTextItem4 }</li>
              <li>{ state.text.careerInfoListTextItem5 }</li>
            </ul>
            <p className="font-1-3x">{ state.text.careerInfoListTextBody }</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoListText
