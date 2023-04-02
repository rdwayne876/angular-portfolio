/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7FDBFE',
        secondary: '#344A53',
        tertiary: '#97AFB9'
      },
      backgroundImage:{
        "hero-pattern": "url('src/assets/magicpattern-pattern-1680314440548.jpeg')"
      }
    },
  },
  plugins: [],
}

