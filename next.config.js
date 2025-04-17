/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  assetPrefix: '/',
};

module.exports = nextConfig;