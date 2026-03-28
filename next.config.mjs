/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Use remotePatterns instead of domains (deprecated)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "**", // Allow all domains (be careful in production)
      },
    ],
  },
  // ❌ Remove swcMinify - it's enabled by default in Next.js 16
  // swcMinify: true,  // DELETE THIS LINE

  reactStrictMode: true,

  // Optional: Turbopack configuration (if you need it)
  // turbopack: {
  //   // Turbopack specific options
  // },
};

export default nextConfig;
