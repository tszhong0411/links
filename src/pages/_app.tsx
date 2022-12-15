import type { AppProps } from 'next/app'

import '../styles/globals.css'

import Analytics from '@/components/Analytics'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
