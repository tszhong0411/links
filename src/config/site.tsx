import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'
import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiReddit,
  SiStackoverflow,
  SiSteam,
  SiTwitch,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si'

import { DailyDotDev } from '@/components/Icon'

type Site = {
  url: string
  logo: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  favicons: IconDescriptor[]
  links: {
    icon: React.ReactNode
    title: string
    url: string
    color: string
  }[]
}

export const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://honghong.me'
      : 'http://localhost:3000',
  logo: 'https://honghong.me/static/images/avatar.png',
  title: 'Links',
  name: 'Hong',
  keywords: [
    'codewithhong',
    'codewithhong social media',
    'codewithhong links',
    'links',
  ],
  titleTemplate: '- Links',
  description:
    'Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/static/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/static/favicon/favicon-32x32.png',
    },
  ],
  links: [
    {
      icon: <FiBook color='#ff0000' />,
      title: 'Blog',
      url: 'https://honghong.me',
      color: '#ff0000',
    },
    {
      icon: <SiYoutube color='#ef4444' />,
      title: 'YouTube',
      url: 'https://www.youtube.com/@codewithhong',
      color: '#ef4444',
    },
    {
      icon: <SiFacebook color='#1299f5' />,
      title: 'Facebook',
      url: 'https://www.facebook.com/codewithhong/',
      color: '#1299f5',
    },
    {
      icon: <SiSteam color='#c4c2bf' />,
      title: 'Steam',
      url: 'https://steamcommunity.com/profiles/76561199157324617/',
      color: '#c4c2bf',
    },
    {
      icon: <SiInstagram color='#f80067' />,
      title: 'Instagram',
      url: 'https://instagram.com/codewithhong/',
      color: '#f80067',
    },
    {
      icon: <SiGithub color='#f1f1f1' />,
      title: 'Github',
      url: 'https://github.com/codewithhong',
      color: '#f1f1f1',
    },
    {
      icon: <SiDiscord color='#5662f6' />,
      title: 'Hong#5872',
      url: 'https://discord.com',
      color: '#5662f6',
    },
    {
      icon: <SiTwitter color='#1da1f2' />,
      title: 'Twitter',
      url: 'https://twitter.com/codewithhong',
      color: '#1da1f2',
    },
    {
      icon: <SiStackoverflow color='#e87921' />,
      title: 'Stack overflow',
      url: 'https://stackoverflow.com/users/15166428',
      color: '#e87921',
    },
    {
      icon: <SiTwitch color='#a970ff' />,
      title: 'Twitch',
      url: 'https://www.twitch.tv/codewithhong',
      color: '#a970ff',
    },
    {
      icon: <SiReddit color='#ff4500' />,
      title: 'Reddit',
      url: 'https://www.reddit.com/user/codewithhong',
      color: '#ff4500',
    },
    {
      icon: <SiDevdotto color='#fff' />,
      title: 'Dev.to',
      url: 'https://dev.to/codewithhong',
      color: '#fff',
    },
    {
      icon: <DailyDotDev />,
      title: 'Daily.dev',
      url: 'https://app.daily.dev/codewithhong',
      color: '#fff',
    },
  ],
}
