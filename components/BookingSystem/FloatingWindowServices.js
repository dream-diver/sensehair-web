import { useContext, useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { GlobalContext } from "../contexts/GlobalContext";
import FormCheck from "./FormCheck"

const FloatingWindow = ({ steps, setSteps, step, show, setShow, checked, setChecked, nextStep, multiChecked = [], setMultiChecked = () => { } }) => {
  const [state, setState] = useContext(GlobalContext)
  const [services, setServices] = useState([])

  const options = state.options;
  const optionHairSize = options.find(option => option.name === "Hair Size").option
  const optionHairType = options.find(option => option.name === "Hair Type").option

  // fetch Services
  const fetchServices = async (hairSize, hairType) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?hair_size=${hairSize}&hair_type=${hairType}&limit=all`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
      return null
    }
  }

  // change service type
  const changeServiceType = () => {
    setSteps({
      ...steps,
      "step3": { ...steps.step3, serviceType: !steps.step3.serviceType },
    })
  }

  useEffect(() => {
    const getData = async () => {
      const hairSize = optionHairSize[steps.step1.value].name
      const hairType = optionHairType[steps.step2.value] ? optionHairType[steps.step2.value].name : ""
      const data = await fetchServices(hairSize, hairType)
      setServices(data.data.map(service => service.data))
      setState({ ...state, services: data.data.map(service => service.data) })
    }
    getData()
  }, [])
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form className="floating-window-form floating-window-form-list" >
          <div className="d-flex">
            <button className={ step.serviceType ? "btn btn-dark flex-grow-1 me-2" : "btn btn-light flex-grow-1 me-2" } onClick={ changeServiceType } type="button">Art Director</button>
            <button className={ !step.serviceType ? "btn btn-dark flex-grow-1" : "btn btn-light flex-grow-1" } onClick={ changeServiceType } type="button">Hairstylist</button>
          </div>
          { services && services.map((service, index) => (
            <FormCheck id={ service.id } data={ service } multiSelect={ step.multiSelect } key={ index } checked={ checked } setChecked={ setChecked } step={ step } multiChecked={ multiChecked } setMultiChecked={ setMultiChecked } />
          )) }
        </form>
      </div>
      <div className="floating-window-footer">
        <a className={ `btn-next btn btn-dark disabled` }><BiLeftArrowAlt className="me-1" />Back</a>
        <a className={ `btn-next btn btn-dark ${multiChecked.length === 0 && "disabled"}` } onClick={ nextStep }>Next<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindow
