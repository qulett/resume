/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // Optional: You can remove this line if not needed
        pathname: '/**', // Specify a pattern to match the image paths
      },
      {
        protocol: "http",
        hostname: "localhost", // Include localhost for local development
        port: "", // Optional: You can remove this line if not needed
        pathname: '/**', // Specify a pattern to match the image paths
      },
    ],
  },
};

module.exports = nextConfig;
