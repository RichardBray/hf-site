const nextMDX = require("@next/mdx");

const withMDX = nextMDX();

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ['img.shields.io']
  },
};

module.exports = withMDX(nextConfig);
