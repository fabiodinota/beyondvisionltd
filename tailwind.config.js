/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: "Inter, sans-serif",
    },
    colors: {
      transparent: "transparent",
      yellow: "#FFF46D",
      background: "#161616",
      backgroundaccent: "#1A1A1A",
      placeholders: "#656565",
      text: "#fff",
      textaccent: "#939393",
    },
    extend: {},
  },
  plugins: [],
};
