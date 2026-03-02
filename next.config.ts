import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // YouTube thumbnails for VideoTestimonialsSection
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        // Stitch design placeholder images
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        // Sanity CDN (swap project id when Sanity is wired up)
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // X-Frame-Options intentionally omitted — we embed Instagram & YouTube iframes on the page
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
