/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: 'tiro-bangla',
      colors: {
        primary: "#FFFFFF",
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
        DEFAULT: "12px",
        md: "3rem",
      },
    },
  },
  plugins: [require("daisyui")],
}