/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#e36ca4',
        'primary': '#f597c3',
        'secondary-100': '#35bec1',
        'secondary': '#62d8da',
        'background-100': '#FFC107',
        'background': '#ffe9a6',
        'light': '#fffef4',
        'background-black': '#333333',
        'background-black-100': '#444444',
        'error-100': '#e13636',
        'error': '#ea5a5a'
      }
    },
  },
  plugins: [],
}