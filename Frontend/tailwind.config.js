/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#FF5733',
        'primary': '#FF7F50',
        'secondary-100': '#4CAF50',
        'secondary': '#66BB6A',
        'background-100': '#FFC107',
        'background': '#FFD54F',
        'accent': '#F4F4F4',
        'accent-100': '#E0E0E0',
        'light': '#F0F0F0',
        'background-black': '#333333',
        'background-black-100': '#444444',
        'error-100': '#F44336',
        'error': '#EF5350'
      }
    },
  },
  plugins: [],
}