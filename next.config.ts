import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  devIndicators: false,
  basePath: isProd ? "/shaneh" : "",
  assetPrefix: isProd ? "/shaneh" : "",
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
