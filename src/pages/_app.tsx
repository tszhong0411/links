import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import Layout from '@/components/Layout'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default App
