/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Only redirect /b2b in production/live, not in local dev
    if (process.env.NODE_ENV !== 'production') {
      return []
    }

    return [
      {
        source: '/b2b',
        destination: 'https://edenpartner.de',
        permanent: true,
      },
    ]
  },
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
