/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features since we're doing static export
  trailingSlash: true, // This helps with static file serving
}

module.exports = nextConfig 