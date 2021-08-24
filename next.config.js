const path = require("path");
const withImages = require("next-images");
const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },      
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'"
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      }      
];
module.exports = {
    reactStrictMode: true,
    webpack5: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    withImages,
    target: "serverless",
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            "/": { page: "/" },
            "/services": { page: "/services" },
            "/about-psychotherapy": { page: "/about-psychotherapy" },
            "/clients": { page: "/clients" },
            "/professional-profile": { page: "/professional-profile" },
            "/contact": { page: "/contact" },
        };
    },
    async Headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders
            }
        ]
    }
};
