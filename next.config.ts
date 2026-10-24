import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "swiper"],
    cssChunking: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

   images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 14400,
  },

  
  poweredByHeader: false,
};

export default nextConfig;
