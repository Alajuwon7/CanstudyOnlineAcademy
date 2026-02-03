/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.figma.com', 'res.cloudinary.com', 'cdn.simpleicons.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  typescript: {
    strict: true,
  },
};

module.exports = nextConfig;
