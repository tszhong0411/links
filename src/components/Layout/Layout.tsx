import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { Favicons } from './Favicons'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  const { asPath } = useRouter()

  return (
    <>
      <NextSeo
        titleTemplate='%s | 小康 Link'
        defaultTitle='小康 Link'
        description='A teenager who want to become a frontend developer'
        canonical={`https://link.honghong.me${asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://link.honghong.me${asPath}`,
          type: 'website',
          title: '小康 Link',
          description: 'A teenager who want to become a frontend developer',
          images: [
            {
              url: 'https://link.honghong.me/static/images/banner.png',
              width: 1200,
              height: 630,
              alt: 'A teenager who want to become a frontend developer',
            },
          ],
        }}
        additionalLinkTags={[...Favicons]}
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout
