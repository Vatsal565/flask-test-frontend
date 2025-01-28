import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://flask-test-backend-pptv.onrender.com/api/:path*"
      }
    ]
  }
};

export default nextConfig;
