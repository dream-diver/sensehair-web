import Image from 'next/image'

const FormCheck = ({ id, data, checked, setChecked, multiSelect, multiChecked = [], setMultiChecked = () => { } }) => {
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
      { data.image &&
        <div className="form-check-img">
          { checked === id ?
            <Image src={ data.imageLight } alt={ data.name } layout="fill" objectFit="contain" />
            : <Image src={ data.image } alt={ data.name } layout="fill" objectFit="contain" />
          }
        </div>
      }
      <input className="form-check-input" type={ multiSelect ? "checkbox" : "radio" } name="exampleRadios" value="option1" checked={ !multiSelect ? checked === id : multiChecked.indexOf(id) !== -1 } onChange={ isChecked } id={ id } />
      <div className="form-check-text">
        <div className="d-flex justify-content-between">
          <label className="form-check-label" onClick={ (e) => e.preventDefault() } htmlFor={ id }>{ data.name ? data.name : data }</label>
          { data.price && <span className="small fw-bold text-black-50">${ data.price }</span> }
        </div>
        <span className="small text-black-50">{ data.time && data.time }</span>
      </div>
    </div>
  )
}

export default FormCheck
