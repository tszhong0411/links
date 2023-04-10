import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'
import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiKeybase,
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
  title: '小康 Links',
  name: '小康',
  keywords: [
    'tszhong0411',
    'tszhong0411 social media',
    'tszhong0411 links',
    'links',
  ],
  titleTemplate: '- 小康 Links',
  description:
    'Connect with me on all my social media profiles through 小康 Links. Discover new content and stay updated with my latest posts!',
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
      title: '小康 Blog',
      url: 'https://honghong.me',
      color: '#ff0000',
    },
    {
      icon: <SiYoutube color='#ef4444' />,
      title: 'YouTube',
      url: 'https://www.youtube.com/channel/UC2hMWOaOlk9vrkvFVaGmn0Q',
      color: '#ef4444',
    },
    {
      icon: <SiFacebook color='#1299f5' />,
      title: 'Facebook',
      url: 'https://www.facebook.com/tszhonglai.0411/',
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
      url: 'https://instagram.com/tszhong0411/',
      color: '#f80067',
    },
    {
      icon: <SiGithub color='#f1f1f1' />,
      title: 'Github',
      url: 'https://github.com/TszHong0411',
      color: '#f1f1f1',
    },
    {
      icon: <SiDiscord color='#5662f6' />,
      title: '小康#4229',
      url: 'https://discord.com',
      color: '#5662f6',
    },
    {
      icon: <SiTwitter color='#1da1f2' />,
      title: 'Twitter',
      url: 'https://twitter.com/TszhongLai0411',
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
      url: 'https://www.twitch.tv/tszhong0411',
      color: '#a970ff',
    },
    {
      icon: <SiReddit color='#ff4500' />,
      title: 'Reddit',
      url: 'https://www.reddit.com/user/TszHong',
      color: '#ff4500',
    },
    {
      icon: <SiDevdotto color='#fff' />,
      title: 'Dev.to',
      url: 'https://dev.to/tszhong0411',
      color: '#fff',
    },
    {
      icon: <DailyDotDev />,
      title: 'Daily.dev',
      url: 'https://app.daily.dev/tszhong0411',
      color: '#fff',
    },
    {
      icon: <SiKeybase color='#ff6f21' />,
      title: 'Keybase',
      url: 'https://keybase.io/tszhong0411',
      color: '#ff6f21',
    },
  ],
}
