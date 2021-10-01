import { useState } from "react";
import ReactDatePicker from "react-datepicker"
import { BiRightArrowAlt } from "react-icons/bi"

import "react-datepicker/dist/react-datepicker.css";

const FloatingWindowDate = ({ step, show, setShow, nextStep }) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form>
          <div className="align-items-center justify-content-around">
            <ReactDatePicker
              selected={ startDate }
              onChange={ (date) => setStartDate(date) }
              inline
            />
            <ReactDatePicker
              selected={ startDate }
              onChange={ (date) => setStartDate(date) }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={ 15 }
              timeCaption="Time"
              dateFormat="h:mm aa"
              inline
            />
          </div>
        </form>
      </div>
      <div className="floating-window-footer">
        <a className="btn-next btn btn-dark" onClick={ nextStep }>Next<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowDate
