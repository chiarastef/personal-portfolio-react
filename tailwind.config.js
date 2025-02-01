/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      sourceSans: ["'Source Sans 3'", "sans-serif"],
      sourceCode: ["Source Code Pro", "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#9feead",
        secondaryColor: "#e8faf6",
      },
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
