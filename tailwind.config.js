/** @type {import('tailwindcss').Config} */
module.exports = {
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
        accent1: "#ff6740",
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
