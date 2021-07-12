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
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'https://cra-to-next.vercel.app/:path*'
      },
      {
        source: '/',
        destination: 'https://cra-to-next.vercel.app/'
      }
    ]
  }
})
