/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Background colors
        'bg-start': '#1f3756',
        'bg-end': '#141539',

        //Primary colors
        'scissorsStart': '#ec9e0e',
        'scissorsEnd': '#eca922',
        'papperStart': '#4865f4',
        'papperEnd': '#5671f5',
        'rockStart': '#dc2e4e',
        'rockEnd': '#dd405d',
        'lizardStart': '#834fe3',
        'lizardEnd': '#8c5de5',
        'spockStart': '#40b9ce',
        'spockEnd': '#52bed1',

        //Nesutra colors

        'darkText': '#3b4363',
        'scoreText': '#2a46c0',
        'outLine': '#606e85',
      },
      fontFamily: {
        'fuente' : ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

