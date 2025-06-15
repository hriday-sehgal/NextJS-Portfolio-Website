/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/projects",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
