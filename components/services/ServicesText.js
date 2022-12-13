import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const ServicesText = () => {
  const [state] = useContext(GlobalContext)

  return (
    <section id="services_text">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 text-center py-5">
            <h2 className="font-weight-500 px-5">{ state.text.servicesServicesTextTitle }</h2>
            <p>{ state.text.servicesServicesTextBody1 }</p>
            <p>{ state.text.servicesServicesTextBody2 }</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesText
