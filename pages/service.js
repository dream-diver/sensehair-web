import Head from 'next/head'
import { BiCalendarCheck } from 'react-icons/bi'
import FloatingWindow from '../components/FloatingWindow'


export default function Home() {
  const multiSelect = true
  const heirTypes = [
    { id: 0, text: "Haircut", },
    { id: 1, text: "Styling" },
    { id: 2, text: "Color" },
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
      <FloatingWindow title="Choose Services" data={heirTypes} nextStep="/stylist" multiSelect={multiSelect} />
    </div>
  )
}
