/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/solutions/dtect",
        destination: "/solutions/evidence-guard",
        permanent: true,
      },
      {
        source: "/solutions/evidence-shield",
        destination: "/solutions/evidence-guard",
        permanent: true,
      },
      {
        source: "/solutions/smart-retail",
        destination: "/solutions/smart-spaces",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;


