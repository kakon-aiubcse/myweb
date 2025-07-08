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
    screens: {
      xs: { max: "430px" },
      tb:{min:"431px", max:"1439px"},
      lp:{min:"1440px", max:"1923px"},
      xb:{min:"1924px"}
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
