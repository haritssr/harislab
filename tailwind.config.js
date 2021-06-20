const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      harislab: "#007AFF",
      black: "#262626",
      white: "#FFFFFF",
      gray: colors.trueGray,
      red: colors.red,
      rose: colors.rose,
      yellow: colors.yellow,
      amber: colors.amber,
      green: colors.green,
      cyan: colors.cyan,
      blue: colors.blue,
      fuschsia: colors.fuchsia,
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
        mw: ["Merriweather"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
