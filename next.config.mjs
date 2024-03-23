/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.pokemondb.net',
            port: '',
            pathname: '/artwork/**',
          },
        ],
      },
};

export default nextConfig;
