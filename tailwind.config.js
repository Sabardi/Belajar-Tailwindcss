/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        17: '70px'
      },
      fontFamily: {
        inter: ['Alkalami'],
      },
      colors:{
        primary: '#f72020'
      }
    },
  },
  plugins: [],
}

