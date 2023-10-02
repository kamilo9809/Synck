/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'color-gris':'#1b1b1b'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      opacity:{
        "98":"0.989998"
      },
      blur:{
        "1": "0,01"
      },
      height:{
        "customBoxText":"527px",
        "customButton" : "165px",
        "customPhone" : "874px"
      }
    },
  },
  plugins: []
}
