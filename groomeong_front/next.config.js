/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  historyApiFallback: true,
  generateBuildId: () => "project-groomeong",
};

module.exports = nextConfig;
