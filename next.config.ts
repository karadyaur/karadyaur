import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  basePath: '/karadyauran',
  reactStrictMode: true,
};

export default nextConfig;
