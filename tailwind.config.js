/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':"#1E2832",
        'primaryBG':"#1E28320D"
      },
      fontFamily:{
        'primary':['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}


