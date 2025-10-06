/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./layouts/**/*.html', './layouts/*.html', './assets/ts/**/*.ts'],
  plugins: [require('@tailwindcss/typography')],
  safelist: ['chroma']
};
