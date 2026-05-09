import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/OCD-TAttoo",
  assetPrefix: "/OCD-TAttoo/",
  trailingSlash: true,

  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },

  // Suppress lint / type errors that only appear in CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Ensure @paper-design/shaders-react compiles correctly in Node build env
  transpilePackages: ["@paper-design/shaders-react"],
};

export default nextConfig;
