const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          'colormind-title': '#148d8d',
          'colormind-background': '#e6e6e6',
          'colormind-cards' : '#ffffff',
          'colormind-navmobile':'#D8D8D8',
          'colormind-text': '#111111',
          'colormind-button': '#efbc75',
          'colormind-hover': '#c6c9ce',
          'colormind-primary': '#0e2c40',
          'colormind-secondary': '#148f8f',
        },
      },
      dark: {
        colors: {
          'colormind-title': '#111111',
          'colormind-background': '#272727',
          'colormind-cards' : '#121212',
          'colormind-navmobile': '#3D3D3D',
          'colormind-text': '#e6e6e6',
          'colormind-button': '#1a4a5a',
          'colormind-hover': '#c6c9ce',
          'colormind-primary': '#0e2c40',
          'colormind-secondary': '#c1e1a7',
        },
      },
    },
  })],
}

