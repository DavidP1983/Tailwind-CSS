/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html'],
  // darkMode: 'class',
  theme: {
    container: {
      center: true,
      width: "1280px",
    },
    extend: {
      gridTemplateRows: {
        "layout": "auto 1fr auto"
      },
      colors: {
        "logo-main": "#9b0404",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
}

