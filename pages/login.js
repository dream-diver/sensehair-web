import Head from 'next/head'
import { BiCalendarCheck } from 'react-icons/bi'
import FloatingWindow from '../components/FloatingWindow'


export default function Home() {
  const multiSelect = false
  const heirSizes = [
    { id: 0, text: "Men", },
    { id: 1, text: "Women Short Hair" },
    { id: 2, text: "Medium Hair" },
    { id: 3, text: "Long Hair" }
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
      <FloatingWindow title="Login" data={heirSizes} nextStep="/hair-type" multiSelect={multiSelect} login={true} />
    </div>
  )
}
