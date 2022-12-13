import Head from 'next/head'
import MainMenu from '../components/MainMenu'
import ScrollToTop from '../components/ScrollToTop'
import FormInfo from '../components/contact/FormInfo'
import Map from '../components/contact/Map'
import Footer from '../components/Footer'


const contact = () => {
  return (
    <div>
      <Head>
        <title>Lookbook | Sense Hair</title>
        <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainMenu />
      <ScrollToTop />
      <FormInfo />
      <Map />
      <Footer />
    </div>
  )
}

export default contact
