import type { Metadata } from 'next'
import Image from 'next/image'

import Gradient from '@/components/Gradient'

import { site } from '@/config/site'

import Links from './links'

export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
}

const HomePage = () => {
  return (
    <>
      <div className='mx-auto mb-10 mt-16 flex flex-col items-center gap-4'>
        <Image
          src='/static/images/avatar.png'
          width={75}
          height={75}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>小康</h1>
        <h2 className='text-sm text-gray-400'>
          A student who loves web development
        </h2>
      </div>
      <div className='flex flex-col gap-4 py-3'>
        <Links />
      </div>
      <Gradient />
    </>
  )
}

export default HomePage
