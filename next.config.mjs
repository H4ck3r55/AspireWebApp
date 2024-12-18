/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['d29jksagrigi3r.cloudfront.net',"tse2.mm.bing.net"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;