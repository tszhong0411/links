import type { Metadata } from 'next'
import Image from 'next/image'

import Gradient from '@/components/gradient'

import { site } from '@/config/site'

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
          src='https://honghong.me/images/avatar.png'
          width={75}
          height={75}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>Hong</h1>
        <p className='text-sm text-gray-400'>
          A student who loves web development
        </p>
      </div>
      <div className='flex flex-col gap-4 py-3'>
        {site.links.map((link) => {
          const { color, icon, title, url } = link

          return (
            <a
              key={link.url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border-2 bg-[rgba(18,18,18,0.5)] px-8 py-4 transition-transform duration-200 hover:scale-105'
              target='_blank'
              rel='noopener, noreferrer'
              style={{
                borderColor: color,
              }}
            >
              <div className='absolute left-8'>{icon}</div>
              <div>{title}</div>
            </a>
          )
        })}
      </div>
      <Gradient />
    </>
  )
}

export default HomePage
