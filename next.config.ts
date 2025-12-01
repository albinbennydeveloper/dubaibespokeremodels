import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"], // Prioritize AVIF for best compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Optimized for mobile to 4K
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Security & size optimization
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"], // Tree shake icons and animations
  },
};

export default nextConfig;
