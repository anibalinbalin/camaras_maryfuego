/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.1.9', '192.168.1.*'],
    optimizeCss: true,
    scrollRestoration: true,
  },
}

export default nextConfig
