/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      'transparent': 'transparent',
      'black': '#000',
      'white': '#FFF',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6',
        500: '#81b8f7',
        300: '#61dafb',  
      },
      cyan: {
        500: '#81b8f7',
        300: '#61dafb',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}