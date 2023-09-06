/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
        minimumCacheTTL: 60
    }
}

module.exports = nextConfig
