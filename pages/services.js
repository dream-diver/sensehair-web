/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import ScrollToTop from '../components/ScrollToTop'
import PriceModal from '../components/services/PriceModal'
import Prices from '../components/services/Prices'
import ServicesText from '../components/services/ServicesText'

const services = () => {
  const [activeHairSize, setActiveHairSize] = useState([])
  const [activeHairType, setActiveHairType] = useState([])

  return (
    <div>
      <Head>
        <title>Services | Sense Hair</title>
        <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainMenu />
      <ScrollToTop />
      <ServicesText />
      <Prices activeHairSize={ activeHairSize } setActiveHairSize={ setActiveHairSize } activeHairType={ activeHairType } setActiveHairType={ setActiveHairType } />
      <Footer />
      <PriceModal activeHairSize={ activeHairSize } setActiveHairSize={ setActiveHairSize } activeHairType={ activeHairType } setActiveHairType={ setActiveHairType } />

    </div>
  )
}

export default services
