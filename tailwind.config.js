/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#33A06F',
        secondary: '#2A3649',
      },
    },
  },
  plugins: [],
};
