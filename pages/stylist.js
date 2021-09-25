import Head from 'next/head'
import { BiCalendarCheck } from 'react-icons/bi'
import FloatingWindow from '../components/FloatingWindow'


export default function Home() {
  const multiSelect = false
  const heirTypes = [
    { id: 0, text: "Joeri", },
    { id: 1, text: "Joffrey" },
    { id: 2, text: "Lynn" },
  ];
  return (
    <div>
      <Head>
        <title>Sense Hair</title>
        <meta name="description" content="Sense Hair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="btn-floating btn btn-lg btn-dark rounded-circle">
        <BiCalendarCheck />
      </button>
      <FloatingWindow title="Choose Stylist" data={heirTypes} nextStep="/date" multiSelect={multiSelect} />
    </div>
  )
}
