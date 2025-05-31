/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        creamYum: '#f8e7c4',
        goldYum: '#efad00',
        purpleYum: '#583e8d',
        hotPinkYum: '#e14d96',
        tealYum: '#19a89e',
      },
    },
  },
  plugins: [],
}