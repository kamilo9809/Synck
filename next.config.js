const { i18n } = require("next-i18next");
const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig = {

    i18n:{
        locales:["en", "es"],
        defaultLocale:"en",
        localeDetection:false
    }
}

module.exports = withFonts({
    webpack(config, options) {
      return config;
    },
    fonts: [
      {
        family: 'Archivo Black',
        fileFormats: ['woff', 'woff2'],
        fontDisplay: 'swap',
      },
    ],
  });
module.exports = nextConfig
