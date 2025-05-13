/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
      '@components': './components',
      '@components/*': './components/*'
    };
    return config;
  },
  // Configure custom pages directory
  experimental: {
    pagesDir: path.join(__dirname, 'app/pages')
  }
};

module.exports = nextConfig; 