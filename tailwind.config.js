/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neuver: "#059669",
      },
    },
    container: {
      center: true,
    },
  },

  plugins: [],
};
