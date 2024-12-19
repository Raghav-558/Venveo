/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#097980",
        "neon":"#D2F038"
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px'
      },
      fontFamily: {
        sohne: ["Sohne Schmal", "sans-serif"],
        maison: ["Maison Neue", "sans-serif"],
        maisonLight: ["MaisonNeueLight", "sans-serif"],
        maisonMedium: ["MaisonNeueMedium", "sans-serif"],
        maisonBook: ["MaisonNeueBook", "sans-serif"],
        maisonDemi: ["MaisonNeueDemi", "sans-serif"],
      },
    },
  },
  plugins: [],
}