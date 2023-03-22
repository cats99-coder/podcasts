/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['is1-ssl.mzstatic.com'],
    remotePatterns: [
      {
        hostname: 'is1-ssl.mzstatic.com',
        protocol: 'https'
      },
      {
        hostname: 'is2-ssl.mzstatic.com',
        protocol: 'https'
      },
      {
        hostname: 'is3-ssl.mzstatic.com',
        protocol: 'https'
      },
    ]
  },
}

module.exports = nextConfig
