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
          'colormind-title': '#828282',
          'colormind-background': '#e6e6e6',
          'colormind-text': '#111111',
          'colormind-button': '#1a4a5a',
          'colormind-hover': '#0e2c40',
          'colormind-primary': '#148d8d',
          'colormind-secondary': '#c1e1a7',
        },
      },
      dark: {
        colors: {
          'colormind-title': '#111111',
          'colormind-background': '#191919',
          'colormind-text': '#e6e6e6',
          'colormind-button': '#e6e6e6',
          'colormind-hover': '#7b786d',
          'colormind-primary': '#148d8d',
          'colormind-secondary': '#c1e1a7',
        },
      },
    },
  })],
}

