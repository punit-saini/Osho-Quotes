/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        abreto : ['Aboreto', 'cursive'],
        noto :  ['Noto Serif', 'serif']
      }
    },
  },
  plugins: [],
}