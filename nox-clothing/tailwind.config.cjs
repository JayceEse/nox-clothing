/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ["Catamaran","sans-serif"],
        robotoCondensed: ["Roboto-Condensed", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
