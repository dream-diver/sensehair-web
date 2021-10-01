import Head from 'next/head'
import { useContext } from 'react'
import BookingSystem from '../components/BookingSystem/BookingSystem'
import { GlobalContext } from '../components/contexts/GlobalContext'


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
    </div>
  )
}
