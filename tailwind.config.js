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
        tertiary: '#97AFB9',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundImage:{
        "hero-pattern": "url('/assets/magicpattern-pattern-1680315419968.jpeg')"
        // "hero-pattern": "url('/assets/magicpattern-pattern-1680315445018.jpeg')"

      }
    },
  },
  plugins: [],
}

