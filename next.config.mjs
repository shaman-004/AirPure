/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    poweredByHeader: false,
    images: {
        domains: ['res.cloudinary.com'],
    },
    async redirects() {
        return [
        {
            source: '/about',
            destination: '/about',
            permanent: true,
        },
        ];
    },  
};

export default nextConfig;
