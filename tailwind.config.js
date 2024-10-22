/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Ejemplo con la fuente "Inter"
        serif: ["Merriweather", "serif"], // Ejemplo con la fuente "Merriweather"
      },
    },
  },
  plugins: [],
};
