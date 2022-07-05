import Script from 'next/script';
import Head from 'next/head';
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
      <Head>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHCDWF5"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script id='tag1' strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
        <Script id='analytic'>
          {
            `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-222774280-1');`
          }
        </Script>

        <Script id='tag' strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WHCDWF5');`}}></Script>
      </Head>
      <Component {...pageProps} />
      <BookingSystemWrapper />
      <ToastContainer
        toastClassName="toastifyToastContainer"
        position="top-right"
        autoClose={5 * 1000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
        transition={Slide}
      />

    </GlobalProvider>
  )
}

export default MyApp
