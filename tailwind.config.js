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
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
