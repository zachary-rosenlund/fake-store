/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com']
  },
  webpack: (config) => {
    config.resolve.extensions.push('*');
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['store'] = path.join(__dirname, 'store');
    return config;
  }
}

module.exports = nextConfig
