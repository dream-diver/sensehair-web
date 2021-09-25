import { useEffect, useState } from "react"
import FormCheck from "./FormCheck"

const FormChecks = ({ data, multiSelect }) => {
  const [checked, setChecked] = useState([])
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      checked.push(0);
    }
  }, [])
  return (
    <div>
      {
        data.map((item) => (<FormCheck key={item.id} id={item.id} text={item.text} checked={checked} setChecked={setChecked} multiSelect={multiSelect} />))
      }
    </div>
  )
}

export default FormChecks
