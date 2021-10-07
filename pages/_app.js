import { GlobalProvider } from "../components/contexts/GlobalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component { ...pageProps } />
    </GlobalProvider>
  )
}

export default MyApp