import { motion } from 'framer-motion'
import Image from 'next/image'

import { config } from '@/lib/config'

import Gradient from '@/components/Gradient'

const Home = () => {
  return (
    <>
      <div className='flex mx-auto flex-col items-center gap-4 my-16'>
        <Image
          src='/static/images/avatar.png'
          width={75}
          height={75}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>小康</h1>
        <h2 className='text-gray-400 text-sm'>
          A student who loves web development
        </h2>
      </div>
      <div className='flex flex-col gap-4'>
        {config.links.map((link, i) => {
          const { color, icon, title, url } = link

          return (
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              key={i}
              href={url}
              className='h-14 w-full bg-[rgba(18,18,18,0.5)] rounded-xl border-2 py-4 px-8 relative flex items-center justify-center'
              target='_blank'
              rel='noopener, noreferrer'
              style={{
                borderColor: color,
              }}
            >
              <div className='absolute left-8'>{icon}</div>
              <div>{title}</div>
            </motion.a>
          )
        })}
      </div>
      <Gradient />
    </>
  )
}

export default Home
