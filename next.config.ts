import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // GitHub Pages serves from /repo-name/ by default.
  // If you're using a custom domain (CNAME), remove these two lines.
  // If not, replace 'ocd-website' with your actual GitHub repository name.
  // basePath: "/ocd-website",
  // assetPrefix: "/ocd-website/",

  images: {
    // next/image optimisation requires a server — disable for static export
    unoptimized: true,
  },
};

export default nextConfig;
