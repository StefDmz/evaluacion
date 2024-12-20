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
        'background': '#ffe9a6',
        'admin-background': '#daf6f6',
        'light': '#fffef4',
        'background-black': '#333333',
        'background-black-100': '#444444',
        'error-100': '#e13636',
        'error': '#ea5a5a',
        'warning': '#fcda32',
        'warning-100': '#f8d217',
        'accent': '#ff983c',
        'accent-100': '#fd8b26',
        'admin-primary': '#c0451f',
        'admin-primary-100': '#a32700'
      }
    },
  },
  plugins: [],
}