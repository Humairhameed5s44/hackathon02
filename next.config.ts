
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.figma.com', // Matches all subdomains of figma.com
      },
    ],
  },
};



export default nextConfig;
