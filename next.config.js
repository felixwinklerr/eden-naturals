/** @type {import('next').NextConfig} */
const nextConfig = {
  // /b2b → eden-partner.com und eden-partner.com/ → B2B-Inhalt: siehe middleware.ts
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.shopifycdn.com',
      },
      {
        protocol: 'https',
        hostname: '**.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
  // Enable React Server Components
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig
