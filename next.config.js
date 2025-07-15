/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**', // Allows any YouTube thumbnail path under /vi
      },
      {
        protocol: 'https',
        hostname: 'images-api.printify.com',
      },
    ],
  },
}

module.exports = nextConfig
