/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080a10",
        accent: "#8b9cff",
      },
    },
  },
  plugins: [],
};
