import Script from 'next/script'
import { GlobalProvider } from "../components/contexts/GlobalContext";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/embala.css'
import '../styles/globals.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component { ...pageProps } />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
    </GlobalProvider>
  )
}

export default MyApp
