/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
};

module.exports = {
  nextConfig,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};
