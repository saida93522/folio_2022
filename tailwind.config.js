/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      fs: "clamp(0.67rem, calc(0.21rem + 6.05vw), 2.05rem)",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1vh",
    },
    extend: {
      colors: {
        taupe: "#A78682",
        dark_taupe: "#544442",
      },
    },
  },
  plugins: [],
};
