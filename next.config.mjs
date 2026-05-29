/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['localhost:3000', '192.168.1.103:3000', '192.168.1.103'],
  },
};

export default nextConfig;