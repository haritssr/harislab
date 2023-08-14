/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
};

module.exports = nextConfig;
