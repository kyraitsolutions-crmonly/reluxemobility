import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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

  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },

  poweredByHeader: false,
};

export default nextConfig;
