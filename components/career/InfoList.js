import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const InfoList = () => {
  const [state] = useContext(GlobalContext)

  return (
    <section id="info_list">
      <div className="container">
        <div className="row">
          <div className="col py-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <h1 className="font-weight-700 mb-3">{ state.text.careerInfoListTitle }</h1>
            <ul className="font-1-5x">
              <li>{ state.text.careerInfoListItem1 }</li>
              <li>{ state.text.careerInfoListItem2 }</li>
              <li>{ state.text.careerInfoListItem3 }</li>
              <li>{ state.text.careerInfoListItem4 }</li>
              <li>{ state.text.careerInfoListItem5 }</li>
              <li>{ state.text.careerInfoListItem6 }</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoList
