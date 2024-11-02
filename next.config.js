/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kashta',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['i.imgur.com'],
  },
};

module.exports = nextConfig;
