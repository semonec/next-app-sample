/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: ''
      }
    ]
  },
}

module.exports = nextConfig
