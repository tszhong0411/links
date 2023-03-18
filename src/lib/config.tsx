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
