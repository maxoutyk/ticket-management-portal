/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@prisma/client', 'bcrypt'],
  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
  },
};

module.exports = nextConfig; 