import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
if (isProd) console.log("yippee");
const nextConfig: NextConfig = {
  devIndicators: false,
  basePath: isProd ? "/shaneh.dev" : "",
  assetPrefix: isProd ? "/shaneh.dev" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
