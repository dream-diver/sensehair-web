import { useEffect, useState } from "react"

const FormCheck = ({ id, text, checked, setChecked, multiSelect }) => {
  const [thisChecked, setThisChecked] = useState(checked[id] ? true : false)
  // TODO: ID Should replace
  useEffect(() => {
    const changeThisChecked = () => {
      setThisChecked(checked[id] ? true : false)
    }
    changeThisChecked()
  }, [checked, id])

  const selectOption = () => {
    let tempChecked = []
    if (multiSelect) {
      tempChecked = [...checked]
    } else {
      for (let i = 0; i < checked.length; i++) {
        tempChecked.push(0);
      }
    }
    if (checked[id] !== 1) {
      tempChecked[id] = 1
    } else {
      tempChecked[id] = 0
    }
    setChecked(tempChecked)
  }

  const isChecked = () => { }


  return (
    <div onClick={selectOption} className={thisChecked ? "form-check active" : "form-check"}>
      <input className="form-check-input" type={multiSelect ? "checkbox" : "radio"} name="exampleRadios" id={id} value="option1" checked={thisChecked} onChange={isChecked} />
      <label className="form-check-label" htmlFor={id} onClick={(e) => e.preventDefault()}>{text}</label>
    </div>
  )
}

export default FormCheck
