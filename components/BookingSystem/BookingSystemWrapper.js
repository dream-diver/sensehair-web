import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import BookingSystem from './BookingSystem'

const BookingSystemWrapper = () => {
  const [state] = useContext(GlobalContext)
  return (
    <div>
      { state.loading ?
        <button id='bookingFloatingButton' className="btn-floating btn btn-lg btn-dark rounded-circle" disabled>
          <div className="spinner-border spinner-border-sm text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </button>
        : <BookingSystem />
      }
    </div>
  )
}

export default BookingSystemWrapper
