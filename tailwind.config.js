/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hermes-blue": "#30EBF2",
        "hermes-purple": "#8C74FE",
        "hermes-black": "#1E1E1E",
        "hermes-gray": "#00000033",
      },
    },
  },
  plugins: [],
};
