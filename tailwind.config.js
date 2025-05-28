/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          goldYum: '#F4C430',
          creamYum: '#FDF1D6',
          purpleYum: '#5B3E96',
          tealYum: '#1EC6B0',
        },
        fontFamily: {
          display: ['Fredoka', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }