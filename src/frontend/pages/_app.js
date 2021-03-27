import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/colors.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
