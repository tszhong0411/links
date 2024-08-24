import Script from 'next/script'

const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      async
      data-website-id='b1b4bdde-b3e9-4c24-b7af-d0c0983f56a9'
      src='https://umami.honghong.me/script.js'
    />
  )
}

export default Analytics
