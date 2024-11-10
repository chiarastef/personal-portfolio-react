/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      sourceSans: ["'Source Sans 3'", "sans-serif"],
      sourceCode: ["Source Code Pro", "sans-serif"],
    },
    colors: {
      green: "#A9E07F",
      yellow: "#F8F779",
    },
    extend: {
      animation: {
        highlight: "highlight 1s linear forwards",
      },
      keyframes: {
        highlight: {
          from: { "background-size": "200%", "background-position": "0" },
          to: {
            "background-size": "200%",
            "background-position": "-100%",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
