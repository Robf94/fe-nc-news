/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.css"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["pastel", "forest"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
