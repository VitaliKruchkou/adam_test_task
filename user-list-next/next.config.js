/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'http://localhost:4200',
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:4200/images/:path*',
      },
    ]
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'placekitten.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
