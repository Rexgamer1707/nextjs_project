/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // o '10mb' si necesitas imágenes más grandes
    },
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;