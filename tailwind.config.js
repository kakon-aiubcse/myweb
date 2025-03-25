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
      
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
