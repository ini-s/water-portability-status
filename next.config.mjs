/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: { displayName: false, fileName: false, pure: true },
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
};

export default nextConfig;
