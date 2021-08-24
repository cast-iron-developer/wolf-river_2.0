const path = require("path");
const withImages = require("next-images");
module.exports = {
    reactStrictMode: true,
    webpack5: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        disableStaticImages: true,
        loader: "imgix",
        path: "https://noop/",
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
};
