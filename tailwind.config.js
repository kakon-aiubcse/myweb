/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        lora: ["Lora", "serif"],
        roboto: ["Roboto"],
        os: ["Open Sans", "sans-serif"],
      },
      screens: {
        xxl: "1920px",
        // Custom breakpoint
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
