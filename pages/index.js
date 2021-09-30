import Head from 'next/head'
import BookingSystem from '../components/BookingSystem/BookingSystem'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sense Hair</title>
        <meta name="description" content="Sense Hair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BookingSystem />
    </div>
  )
}
