/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/qBbP7bc/**'
      },
      {
        protocol: 'http',
        hostname: 'ddragon.leagueoflegends.com',
        port: '',
        pathname: '/cdn/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.communitydragon.org',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
