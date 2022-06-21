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
  const [includeTimes, setIncludeTimes] = useState([])
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

  useEffect(() => {
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
      } else {
        setStartDate(addDays(startDate, 1))
      }
    }
    getIncludeTimes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate])

  const checkAndSelectDate = (date) => {
    if (date < new Date().setHours(0, 0, 0, 0)) {
      alert("Pleas choose a valid date");
    }
    else {
      setStartDate(date)
    }
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
                minDate={new Date()}
                maxDate={new Date(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate())}
              />
            </div>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => checkAndSelectDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              minTime={setHours(setMinutes(new Date(), 0), 10)}
              maxTime={setHours(setMinutes(new Date(), 40), 17)}
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
        <a className="btn-next btn btn-dark" onClick={nextStep}>{state.text.bookingNext}<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindowDate
