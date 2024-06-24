/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/java",
        destination: "https://sites.google.com/kaksha.dev/easylearn/home",
      },
      {
        source: "/java/:path*",
        destination:
          "https://sites.google.com/kaksha.dev/easylearn/home/:path*",
      },
    ];
  },
};

export default nextConfig;
