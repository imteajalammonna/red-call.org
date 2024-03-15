/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: 'Poppins',
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3",
      },
      animationDelay: {
        '300': '1s',
        '500': '500ms',
        '700': '700ms',
      },
    }, container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        md: "5rem",
      },
    },
  },
  plugins: [require("daisyui")],
}