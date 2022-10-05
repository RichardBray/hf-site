const nextMDX = require("@next/mdx");

const withMDX = nextMDX();

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
