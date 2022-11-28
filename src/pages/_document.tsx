import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class _Document extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='bg-[#010101] text-white font-default'>
          <div className='relative min-h-screen overflow-x-hidden'>
            <main className='relative mx-auto max-w-lg px-4'>
              <Main />
              <NextScript />
            </main>
          </div>
        </body>
      </Html>
    )
  }
}
