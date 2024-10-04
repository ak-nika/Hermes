/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hermes-blue": "#30EBF2",
        "hermes-purple": "#8C74FE",
      },
    },
  },
  plugins: [],
}