import type { NextConfig } from "next";
import loadConfig from "next/dist/server/config";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/innovationcouncil/' : '',
  basePath: isProd ? '/innovationcouncil' : '',
  output: 'export',
  
};

export default nextConfig;
