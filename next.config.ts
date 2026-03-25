import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // 👈 force correct root
  },
};

export default nextConfig;
