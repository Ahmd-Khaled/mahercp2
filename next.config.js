const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  // output: 'export',
  images: {
    domains: [
      "images.pexels.com",
      "127.0.0.1",
      "d2020.net",
      "swiperjs.com"
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import './base.scss';`,
  },
}
 
module.exports = withNextIntl(nextConfig);