const withImages = require('next-images')

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  reactStrictMode: true,
  esModule: true,
  images: {
    disableStaticImages: true
  },
  webpack(config, options) {
    return config
  }
})
