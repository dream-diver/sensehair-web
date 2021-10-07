import Head from 'next/head'
import { useContext } from 'react'
import BookingSystem from '../components/BookingSystem/BookingSystem'
import { GlobalContext } from '../components/contexts/GlobalContext'
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [state, setState] = useContext(GlobalContext)
  return (
    <div>
      <Head>
        <title>Sense Hair</title>
        <meta name="description" content="Sense Hair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { state.loading ?
        <button className="btn-floating btn btn-lg btn-dark rounded-circle" disabled>
          <div className="spinner-border spinner-border-sm text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </button>
        : <BookingSystem />
      }
      <ToastContainer
        toastClassName="toastifyToastContainer"
        position="top-right"
        autoClose={ 5 * 1000 }
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={ 5 }
        transition={ Slide }
      />
    </div>
  )
}
