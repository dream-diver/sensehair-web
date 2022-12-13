import Head from 'next/head'
import Header from '../components/home/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Award from '../components/home/Award'
import WhyUs from '../components/home/WhyUs'
import Contact from '../components/home/Contact'
import Services from '../components/home/Services'
import Team from '../components/home/Team'
import HowWeWork from '../components/HowWeWork'
import Review from '../components/home/Review'
import Lookbook from '../components/home/Lookbook'
import BookingSystem from '../components/BookingSystem/BookingSystem'
import { useContext } from 'react'
import { GlobalContext } from '../components/contexts/GlobalContext'

export default function Home() {
  const [state] = useContext(GlobalContext)
  return (
    <div>
      <Head>
        <title>Sense Hair</title>
        <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollToTop />
      { !state.loading && (
        <Award />
      ) }
      <WhyUs />
      <Contact />
      <Services />
      <Team />
      <HowWeWork />
      <Review />
      <Lookbook />
      <Footer />
    </div>
  )
}
