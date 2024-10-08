/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      zIndex: {
        1: "1",
      },
      borderWidth: {
        3: "3px",
      },
      center: true,
      padding: "1rem",
      extend: {},
      screens: {
        "sm": "650px",
        "md": "768px",
        "lg": "1025px",
        "lm": "1060px",
        "mxl": "1140px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
}
