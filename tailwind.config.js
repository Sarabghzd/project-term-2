/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "0",
      medium: "768px",
      large: "992px",
      desktop: "1453px",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Manrope: ["Manrope"],
      },
    },
  },
  plugins: [require("daisyui")],
};
