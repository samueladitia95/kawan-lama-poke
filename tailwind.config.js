/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins"],
      },
      colors: {
        bLightPrimary: "#ffffff",
        bLightSecondary: "#f0f1f2",
        tLightPrimary: "#242424",
        bDarkPrimary: "#121318",
        bDarkSecondary: "#212328",
        tDarkPrimary: "#dbdbdb",
        accent1: "#D61C4E",
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
  darkMode: "class",
};
