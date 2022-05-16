import Image from 'next/image'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { makePrice } from '../Helpers'

const FormCheck = ({ id, data, checked, setChecked, multiSelect, step, multiChecked = [], setMultiChecked = () => { } }) => {
  const [state] = useContext(GlobalContext)
  const selectOption = (id) => {
    if (!multiSelect) {
      setChecked(id)
    } else {
      if (multiChecked.indexOf(id) === -1) {
        setMultiChecked([...multiChecked, id])
      } else {
        setMultiChecked(multiChecked.filter(option => option !== id))
      }
    }
  }
  const isChecked = () => { }
  return (
    <div onClick={ () => { selectOption(id) } } className={ !multiSelect ? checked === id ? "form-check active" : "form-check" : multiChecked.indexOf(id) !== -1 ? "form-check active" : "form-check" }>
      { (step.id === 1 || step.id === 2) && data.image &&
        <div className="form-check-img">
          { checked === id ?
            <Image src={ data.imageLight } alt={ state.locale === 'en' ? data.name_en : data.name } layout="fill" objectFit="contain" />
            : <Image src={ data.image } alt={ state.locale === 'en' ? data.name_en : data.name } layout="fill" objectFit="contain" />
          }
        </div>
      }
      { step.id === 4 && data.avatar_path &&
        <div className="form-check-img user-img">
          <img src={ data.avatar_path }/>
          {/* <Image src={ data.avatar_path } alt={ (state.locale === 'en' && step.id !== 4) ? data.name_en : data.name } layout="fill" objectFit="contain" /> */}
        </div>
      }
      <input className="form-check-input" type={ multiSelect ? "checkbox" : "radio" } name="exampleRadios" value="option1" checked={ !multiSelect ? checked === id : multiChecked.indexOf(id) !== -1 } onChange={ isChecked } id={ id } />
      <div className="form-check-text">
        <div className="d-flex justify-content-between">
          <label className="form-check-label" onClick={ (e) => e.preventDefault() } htmlFor={ id }>{ (state.locale === 'en' && step.id !== 4) ? data.name_en : data.name ? (state.locale === 'en' && step.id !== 4) ? data.name_en : data.name : data }</label>
          { step.id === 3 && <span className="small sub-heading">{ makePrice(step.serviceType ? data.art_director_price : data.stylist_price) }</span> }
        </div>
        { data.duration && <span className="small sub-heading">{ data.duration } { state.text.bookingMinutes }</span> } { step.id === 3 && <>| <span className="small sub-heading">{ step.serviceType ? "Art Director" : "Hairstylist " }</span></> }
      </div>
    </div >
  )
}

export default FormCheck
