/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: '#828282',
        ashen: '#676767',
        white: '#FFFFFF',
        black: '#1B2021',
        yellow: '#F58634',
      },
    },
  },
  plugins: [],
};
