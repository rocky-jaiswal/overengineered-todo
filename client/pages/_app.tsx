import type { AppProps } from 'next/app'

import Footer from '../components/Footer'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-auto lg:h-screen flex flex-col">
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
