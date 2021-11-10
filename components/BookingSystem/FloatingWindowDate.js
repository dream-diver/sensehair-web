import ReactDatePicker from "react-datepicker"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { BiRightArrowAlt } from "react-icons/bi"
import { useEffect, useState } from "react";
import moment, { parseISO } from 'date-fns';

const FloatingWindowDate = ({ steps, step, show, setShow, nextStep, startDate, setStartDate }) => {
  const [includeTimes, setIncludeTimes] = useState([])
  // fetch including times
  const fetchIncludeTimes = async (stylist, duration, date) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/servers/${stylist}/availableTimes?duration=${duration}&date=${moment(parseISO(date)).format("DD-MM-YYYY")}`)
      const data = await response.json()
      console.log(moment(date).format("DD-MM-YYYY"));
      console.log(moment(date));
      return data
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const getIncludeTimes = async () => {
      const includeTimesFromServer = await fetchIncludeTimes(steps.step4.value, 120, startDate)
      console.log("includeTimesFromServer", includeTimesFromServer);
      setIncludeTimes(includeTimesFromServer)
    }
    getIncludeTimes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(includeTimes)
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
              timeIntervals={ 15 }
              minTime={ setHours(setMinutes(new Date(), 0), 10) }
              maxTime={ setHours(setMinutes(new Date(), 40), 17) }
              includeTimes={ includeTimes }
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
