/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@prisma/client', 'bcrypt'],
  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
  },
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 