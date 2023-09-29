const { i18n } = require("next-i18next");

/** @type {import('next').NextConfig} */
const nextConfig = {

    i18n:{
        locales:["en", "es"],
        defaultLocale:"en",
        localeDetection:false
    }
}


module.exports = nextConfig
