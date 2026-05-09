import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // GitHub Pages serves from /OCD-TAttoo/ (your repo name).
  // Remove these two lines if you add a custom domain.
  basePath: "/OCD-TAttoo",
  assetPrefix: "/OCD-TAttoo/",

  images: {
    // next/image optimisation requires a server — disable for static export
    unoptimized: true,
  },
};

export default nextConfig;
