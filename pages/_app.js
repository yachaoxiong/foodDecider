import '../styles/globals.css'
import Meta from '../components/Meta/Meta'
function MyApp({ Component, pageProps }) {
  return <>
       <Meta />
        <Component {...pageProps} />
       </>
}

export default MyApp
