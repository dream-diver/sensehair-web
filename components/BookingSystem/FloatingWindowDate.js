import ReactDatePicker from "react-datepicker"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { useEffect, useState, useContext } from "react"
import format from "date-fns/format"
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
import setSeconds from "date-fns/setSeconds"
import { GlobalContext } from '../contexts/GlobalContext'
import addDays from 'date-fns/addDays'

const FloatingWindowDate = ({ steps, step, show, setShow, nextStep, startDate, setStartDate, previousStep }) => {
  const [state] = useContext(GlobalContext)
  const [includeTimes, setIncludeTimes] = useState([]);
  const [minDate, setMinDate] = useState(new Date())
  const [minTime, setMinTime] = useState(setHours(setMinutes(new Date(startDate), 0), 10));
  // fetch including times
  const fetchIncludeTimes = async (stylist, duration, date) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/servers/${stylist}/availableTimes?duration=${duration}&date=${format(startDate, "dd-MM-yyyy")}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(async () => {
    const getIncludeTimes = async () => {
      const selectedServices = steps.step3.value
      const servicesTotalDuration = state.services.filter(({ id }) => selectedServices.includes(id)).map(services => services.duration).reduce((a, b) => a + b, 0)
      const includeTimesFromServer = await fetchIncludeTimes(steps.step4.value, servicesTotalDuration, startDate)
      if (includeTimesFromServer && includeTimesFromServer.length > 0) {
        const convertedIncludeTimesFromServer = includeTimesFromServer.map(time => {
          const regExTime = /([0-9]{1,2}):([0-9]{2})/
          const regExTimeArr = regExTime.exec(time)
          return setHours(setMinutes(setSeconds(new Date(), 0), regExTimeArr[2]), regExTimeArr[1])
        })
        setIncludeTimes(convertedIncludeTimesFromServer)
        setMinTime(setHours(setMinutes(new Date(startDate), 0), 10))
      }
      else {
        setStartDate(addDays(startDate, 1))
      }
    }

    if (new Date().toDateString() === startDate.toDateString()) {
      console.log("today")
      if (new Date().getHours() >= 17) {
        setMinDate(addDays(startDate, 1));
      }
      else {
        await getIncludeTimes();
        const minDiffer = (new Date().getMinutes() + 30) <= 60 ? 30 : (new Date().getMinutes() + 30) - 60;
        const hour = (new Date().getMinutes() + 30) <= 60 ? new Date().getHours() : new Date().getHours() + 1;
        console.log(minDiffer, hour);
        setMinTime(setHours(setMinutes(new Date(), minDiffer), hour))
      }
    }
    else {
      await getIncludeTimes();
    }

  }, [startDate])

  const checkAndSelectDate = (date) => {
    if (!validateDate(date)) {
      alert("Pleas choose a valid time");
    }
    else {
      console.log({ date });
      setStartDate(date)
    }
  }

  const validateDate = (date) => {
    const tmpDate = new Date(date);
    if (new Date().toDateString() === tmpDate.toDateString()) {
      console.log("today");
      if (tmpDate.getHours() < new Date().getHours()) {
        console.log("today", tmpDate.getHours(), new Date().getHours());
        return false;
      }
    }
    else if (tmpDate.setHours(0, 0, 0) < new Date().setHours(0, 0, 0)) {
      return false;
    }
    return true;
  }

  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{step.title}</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShow(!show)}></button>
      </div>
      <div className="floating-window-body">
        <form>
          <div className="d-flex flex-column flex-md-row">
            <div className="me-1 me-md-5">
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => checkAndSelectDate(date)}
                inline
                minDate={minDate}
                maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())}
              />
            </div>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => checkAndSelectDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              minTime={minTime}
              maxTime={setHours(setMinutes(new Date(startDate), 40), 17)}
              includeTimes={includeTimes}
              timeCaption="Time"
              dateFormat="h:mm aa"
              // locale={ state.locale }
              inline
            />
          </div>
        </form>
      </div>
      <div className="floating-window-footer">
        <a className={`btn-next btn btn-dark`} onClick={previousStep}><BiLeftArrowAlt className="me-1" />{state.text.bookingBack}</a>
        <a className="btn-next btn btn-dark" onClick={() => { validateDate(startDate) && nextStep() }}>{state.text.bookingNext}<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowDate
