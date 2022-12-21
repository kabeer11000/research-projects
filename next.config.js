/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/courses',
  images: {
    loader: 'akamai',
    path: './',
    unoptimized: true
  }
}

module.exports = nextConfig
