import Head from 'next/head'
import { BiCalendarCheck } from 'react-icons/bi'
import FloatingWindow from '../components/FloatingWindow'


export default function Home() {
  const multiSelect = false
  const heirTypes = [
    { id: 0, text: "Straight", },
    { id: 1, text: "Wavy" },
    { id: 2, text: "Curly " },
    { id: 3, text: "Coily" }
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
      <FloatingWindow title="Choose Hair Type" data={heirTypes} nextStep="/service" multiSelect={multiSelect} />
    </div>
  )
}
