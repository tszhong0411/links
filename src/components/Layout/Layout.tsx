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
        titleTemplate='%s | 小康 Links'
        defaultTitle='小康 Links'
        description='A teenager who want to become a frontend developer'
        canonical={`https://links.honghong.me${asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://links.honghong.me${asPath}`,
          type: 'website',
          title: '小康 Links',
          description: 'A teenager who want to become a frontend developer',
          images: [
            {
              url: 'https://links.honghong.me/static/images/banner.png',
              width: 1600,
              height: 960,
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
