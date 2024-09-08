/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      colors: {
        customBlack: '#121212',
        darkBlack: '#0C0C0C',
        lightGray: '#A3A3A3',
        customGray: '#353535',
      },
    },
  },
  plugins: [],
}
