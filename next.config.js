/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.notion.com/:path*',
      },
    ];
  },
  webpack: (config) => {
    // 기존의 웹팩 플러그인에 새로운 Dotenv플러그인을 연결시켜준다.
    // silent는 옵션은 .env파일을 찾지 못했을 때 에러를 일으키지 않도록 설정해주는 옵션이다.
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  }
};

const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
},
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'i.ibb.co'
    ]
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  output: 'standalone',
};

module.exports = nextConfig;