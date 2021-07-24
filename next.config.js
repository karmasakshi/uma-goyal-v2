// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ["components", "constants", "interfaces", "pages"],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
