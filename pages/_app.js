import Script from 'next/script'
import { GlobalProvider } from "../components/contexts/GlobalContext";
// import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component { ...pageProps } />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="lazyOnload" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="../coustom/scripts.js" strategy="lazyOnload" />
    </GlobalProvider>
  )
}

export default MyApp
