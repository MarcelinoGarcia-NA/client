import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '3000',
                pathname: '/u/**',
              },
        ]
    }
};

export default nextConfig;
