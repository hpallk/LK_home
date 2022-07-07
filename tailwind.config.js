module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_800: "#3f3d56",
        green_A700: "#20d165",
        black_900: "#000000",
        gray_900: "#010047",
        deep_purple_A100: "#9970fd",
        orange_400: "#feb32a",
        white_A700: "#ffffff",
      },
      fontFamily: { roboto: "Roboto" },
      borderRadius: { radius10: "10px", radius15: "15px", radius50: "50%" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
