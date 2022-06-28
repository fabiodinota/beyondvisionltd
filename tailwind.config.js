/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "808px",
      bml: "894px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1315px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
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
