// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // This is the one you already have
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        // THIS IS THE NEW ONE YOU ARE ADDING
        protocol: 'https',
        hostname: 'cdn.corenexis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;