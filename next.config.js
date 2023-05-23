/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
}

module.exports = nextConfig
