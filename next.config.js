/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'roshanrah.blob.core.windows.net',
        port: '',
        pathname: '/bethel/**'
      }
    ]
  }
}

module.exports = nextConfig
