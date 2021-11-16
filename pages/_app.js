import { GlobalProvider } from "../components/contexts/GlobalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/globals.css'
import '../styles/IdealBankSectionStyles.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component { ...pageProps } />
    </GlobalProvider>
  )
}

export default MyApp
