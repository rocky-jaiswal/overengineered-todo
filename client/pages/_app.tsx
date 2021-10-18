import type { AppProps } from 'next/app'

import Footer from '../components/Footer'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app_container">
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
