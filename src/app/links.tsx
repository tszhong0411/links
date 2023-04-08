'use client'

import { motion } from 'framer-motion'

import { site } from '@/config/site'

const Links = () => {
  return (
    <>
      {site.links.map((link) => {
        const { color, icon, title, url } = link

        return (
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            key={link.url}
            href={url}
            className='relative flex h-14 w-full items-center justify-center rounded-xl border-2 bg-[rgba(18,18,18,0.5)] px-8 py-4'
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
    </>
  )
}

export default Links
