import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import '../styles/globals.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return <Component { ...pageProps } />
}

export default MyApp
