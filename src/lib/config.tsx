import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiStackoverflow,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si'

import { DailyDotDev } from '@/components/Icon'

type Link = {
  icon: React.ReactNode
  title: string
  url: string
  color: string
}

type Config = {
  links: Link[]
}

export const config: Config = {
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
  ],
}
