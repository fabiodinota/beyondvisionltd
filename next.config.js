/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: ["i.imgur.com", "s3.us-west-2.amazonaws.com"],
  },
};
module.exports = {
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
