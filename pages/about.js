import Head from 'next/head'
import Header from '../components/about/Header'
import InfoImg from '../components/about/InfoImg'
import InfoImgReverse from '../components/about/InfoImgReverse'
import MeatTheTeam from '../components/about/MeatTheTeam'
import Reviews from '../components/about/Reviews'
import HowWeWork from '../components/HowWeWork'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
      <Head>
        <title>About | Sense Hair</title>
        <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollToTop />
      <InfoImg />
      <InfoImgReverse />
      <HowWeWork />
      <MeatTheTeam />
      <Reviews />
      <Footer />
    </div>
  )
}

export default about
