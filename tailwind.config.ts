import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'thai-cream': '#f8e7c4',
        'deep-purple': '#583e8d',
        'thai-gold': '#efad00',
        'teal-green': '#19a89e',
        'hot-pink': '#e14d96',
      },
      fontFamily: {
        'milkyway': ['Fredoka', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 