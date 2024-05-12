/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    reactStrictMode: true,
        
    
  }
  
  module.exports = nextConfig
