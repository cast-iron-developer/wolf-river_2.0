const path = require('path')
const withImages = require('next-images');
module.exports = {
  reactStrictMode: true,
  webpack5: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    disableStaticImages: true
  },
  withImages,
  target: "serverless"
}