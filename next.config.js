/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    POSTHOG_API_KEY: process.env.POSTHOG_API_KEY
  }
};

export default nextConfig;
