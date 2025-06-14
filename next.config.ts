import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nelsonlai.me'
      }
    ]
  }
}

export default nextConfig
