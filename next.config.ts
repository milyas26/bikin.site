import { withContentlayer } from "next-contentlayer";

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
});
