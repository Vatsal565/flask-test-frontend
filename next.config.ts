import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://temp-fastapi-backend.onrender.com/api/:path*"
      }
    ]
  }
};

export default nextConfig;
