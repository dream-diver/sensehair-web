/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Header from '../components/lookbook/Header'
import ScrollToTop from '../components/ScrollToTop'
import Lookbook from '../components/lookbook/Lookbook'
import LookbookAll from '../components/lookbook/LookbookAll'
import Footer from '../components/Footer'
import { useRef, useState } from 'react'


const lookbook = () => {
  const [showAll, setShowAll] = useState(false)
  const lookbookAllRef = useRef(null)
  const damesRef = useRef(null)
  const kleurRef = useRef(null)
  const herenRef = useRef(null)
  const collectiesRef = useRef(null)

  // const executeScroll = () => {
  //   setTimeout(() => {
  //     const collapseLookbookAll = lookbookAllRef.current ? lookbookAllRef.current.getBoundingClientRect() : 0
  //     document.body.scrollTop = document.body.scrollTop + collapseLookbookAll.y - 100 // For Safari
  //     document.documentElement.scrollTop = document.documentElement.scrollTop + collapseLookbookAll.y - 100 // For Chrome, Firefox, IE and Opera
  //   }, 150)
  // }

  const executeScroll = (reference) => {
    setTimeout(() => {
      const scrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      }

      switch (reference) {
        case 'DAMES':
          damesRef.current.scrollIntoView(scrollIntoViewOptions)
          break
        case 'KLEUR':
          kleurRef.current.scrollIntoView(scrollIntoViewOptions)
          break
        case 'HEREN':
          herenRef.current.scrollIntoView(scrollIntoViewOptions)
          break
        case 'COLLECTIES':
          collectiesRef.current.scrollIntoView(scrollIntoViewOptions)
          break
        default:
          break
      }
    }, 150)
  }
  return (
    <div>
      <Head>
        <title>Lookbook | Sense Hair</title>
        <meta name="description" content="Sensehair is a saloon shop website with an appointment/booking system." />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showAll={ showAll } setShowAll={ setShowAll } executeScroll={ executeScroll } />
      <ScrollToTop />
      { !showAll ? <Lookbook /> : <LookbookAll lookbookAllRef={ lookbookAllRef } damesRef={ damesRef } kleurRef={ kleurRef } herenRef={ herenRef } collectiesRef={ collectiesRef } /> }
      <Footer />
    </div>
  )
}

export default lookbook
