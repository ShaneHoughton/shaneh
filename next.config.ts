import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: process.env.PAGES_BASE_PATH,
  // Optional: If deploying to a subpath (e.g., your-username.github.io/your-repo-name),
  // set basePath and assetPrefix. Replace 'your-repo-name' with your repository name.
  basePath: "/shaneh",
  assetPrefix: "/shaneh",
};

export default nextConfig;
