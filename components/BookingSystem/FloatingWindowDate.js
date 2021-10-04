import ReactDatePicker from "react-datepicker"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { BiRightArrowAlt } from "react-icons/bi"

const FloatingWindowDate = ({ step, show, setShow, nextStep, startDate, setStartDate }) => {
  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <form>
          <div className="d-flex">
            <div className="me-1 me-md-5">
              <ReactDatePicker
                selected={ startDate }
                onChange={ (date) => setStartDate(date) }
                inline
              />
            </div>
            <ReactDatePicker
              selected={ startDate }
              onChange={ (date) => setStartDate(date) }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={ 20 }
              minTime={ setHours(setMinutes(new Date(), 0), 10) }
              maxTime={ setHours(setMinutes(new Date(), 40), 17) }
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
