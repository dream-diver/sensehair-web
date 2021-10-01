const FormCheck = ({ id, text, checked, setChecked, multiSelect, multiChecked = [], setMultiChecked = () => { } }) => {
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
      <input className="form-check-input" type={ multiSelect ? "checkbox" : "radio" } name="exampleRadios" value="option1" checked={ !multiSelect ? checked === id : multiChecked.indexOf(id) !== -1 } onChange={ isChecked } id={ id } />
      <label className="form-check-label" onClick={ (e) => e.preventDefault() } htmlFor={ id }>{ text }</label>
    </div>
  )
}

export default FormCheck
