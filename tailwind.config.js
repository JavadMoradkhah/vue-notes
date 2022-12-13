/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#33A06F',
        secondary: '#2A3649',
        darkbg: '#1A222D',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
