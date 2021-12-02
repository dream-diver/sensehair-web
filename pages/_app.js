import Script from 'next/script'
import { GlobalProvider } from "../components/contexts/GlobalContext"
import { Slide, ToastContainer } from 'react-toastify'
import AOS from 'aos'

import BookingSystemWrapper from '../components/BookingSystem/BookingSystemWrapper'
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css"
import '../styles/embala.css'
import '../styles/globals.css'
import '../styles/responsive.css'
import 'aos/dist/aos.css'
import '../styles/booking.css'
import '../styles/IdealBankSectionStyles.css'
import 'react-toastify/dist/ReactToastify.css'

import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <GlobalProvider>
      <Component { ...pageProps } />
      <BookingSystemWrapper />
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
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
    </GlobalProvider>
  )
}

export default MyApp
