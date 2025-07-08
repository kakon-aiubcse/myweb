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
      tb:{min:"431px", max:"1023px"},
      lp:{min:"1024px", max:"1500px"},
      xb:{min:"1501px"}
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
