import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  // Standard full-stack Next.js configuration for Vercel deployment
  basePath: basePath || undefined,
  reactStrictMode: true,
};

export default nextConfig;
