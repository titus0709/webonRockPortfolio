
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },

  experimental: {
    staticGenerationMaxConcurrency: 1,
  },
};

module.exports = nextConfig;
