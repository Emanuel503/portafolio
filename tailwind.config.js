/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'colormind-black': '#111111',
      'colormind-white': '#e6e6e6',
      'colormind-500-white': '#9d9d9d',
      'colormind-gray': '#191919',
      'colormind-blue': '#0e2c40',
      'colormind-500-blue': '#1a4a5a',
      'colormind-300-blue': '#148d8d',
      'colormind-green': '#c1e1a7',
      'colormind-orange': '#efbc75',
    },
  },
  plugins: [],
}

