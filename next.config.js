/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
      domains:["res.cloudinary.com","s3.ap-south-1.amazonaws.com","cdn-marketplacexyz.s3.ap-south-1.amazonaws.com"]
    }
}

module.exports = nextConfig
