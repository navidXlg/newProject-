/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "green-150": "#f9e4bc",
        "green-250": "#94b777",
        "green-350": "#3e5b42",
        "green-750": "#515e4a",
        "green-850": "#12372a",
        "olive-150": "#758f67",
        "black-750": "#d7b577",
        "teal-750": "#04241a",
        "teal-150": "#789461",
        "olive-750": "#4F6F52",
        "white-150": "#fdf0d0",
        "brown-150": "#cec2a2",
        "brown-750": "#4a463b",
        "yellow-150": "#515e4a",
        "yellow-750": "#f9e4a3",
        "yellow-850": "#8d9a66",
      },
    },
  },
  plugins: [],
};
