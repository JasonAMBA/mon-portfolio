/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfoliojason.s3.eu-north-1.amazonaws.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
