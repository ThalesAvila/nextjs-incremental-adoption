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
  },
  rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'http://localhost:4000/:path*'
      },
      {
        source: '/',
        destination: 'http://localhost:4000/'
      }
    ]
  }
})
