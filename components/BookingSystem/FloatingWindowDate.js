import ReactDatePicker from "react-datepicker"
import { BiRightArrowAlt } from "react-icons/bi"
import { useEffect, useState, useContext } from "react";
import format from "date-fns/format";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import setSeconds from "date-fns/setSeconds";
import { GlobalContext } from '../contexts/GlobalContext'

const FloatingWindowDate = ({ steps, step, show, setShow, nextStep, startDate, setStartDate }) => {
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
      const convertedIncludeTimesFromServer = includeTimesFromServer.map(time => {
        const regExTime = /([0-9]{1,2}):([0-9]{2})/
        const regExTimeArr = regExTime.exec(time)
        return setHours(setMinutes(setSeconds(new Date(), 0), regExTimeArr[2]), regExTimeArr[1])
      })
      setIncludeTimes(convertedIncludeTimesFromServer)
    }
    getIncludeTimes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate])

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
