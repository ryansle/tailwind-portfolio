/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'downloads.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
      }
    ],
  },
  async headers() {
    return [
      {
        // The PDF is crawlable but absent from the sitemap, so it could rank on
        // its own with no navigation back to the site and a stale work history.
        // Direct links still work; it just stays out of search results.
        source: '/resume.pdf',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

module.exports = nextConfig;
