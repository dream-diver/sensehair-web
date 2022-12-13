import Head from 'next/head'
import Header from '../components/career/Header'
import ScrollToTop from '../components/ScrollToTop'
import Info from '../components/career/Info'
import InfoList from '../components/career/InfoList'
import InfoListText from '../components/career/InfoListText'
import ApplicationForm from '../components/career/ApplicationForm'
import Footer from '../components/Footer'


const career = () => {
  return (
    <div>
      <Head>
        <title>Career | Sense Hair</title>
        <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollToTop />
      <Info />
      <InfoList />
      <InfoListText />
      <ApplicationForm />
      <Footer />
    </div>
  )
}

export default career
