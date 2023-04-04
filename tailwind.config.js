// const colors = require("tailwindcss/colors");
// const spacing = require("tailwindcss/spacing");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // spacing: {
    //   120: "30rem",
    //   200: "50rem",
    // },
    // borderRadius: {
    //   '4xl': '2rem',
    // },
    // spacing: {
    //   px: "1px",
    //   0: "0",
    //   0.5: "0.125rem",
    //   1: "0.25rem",
    //   1.5: "0.375rem",
    //   2: "5rem",
    //   2.2: "10rem",
    //   2.5: "0.625rem",
    //   3: "0.75rem",
    //   3.5: "0.875rem",
    //   4: "1rem",
    //   5: "1.25rem",
    //   6: "1.5rem",
    //   7: "1.75rem",
    //   8: "2rem",
    // },
    // colors: {
    //   primary: "#0b69e3",
    //   secondary: "#16c72d",
    //   blue: "#1fb6ff",
    //   purple: "#7e5bef",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   yellow: "#ffc82c",
    //   tahiti: {
    //     100: "#cffafe",
    //     200: "#a5f3fc",
    //     300: "#67e8f9",
    //     400: "#22d3ee",
    //     500: "#06b6d4",
    //     600: "#0891b2",
    //     700: "#0e7490",
    //     800: "#155e75",
    //     900: "#164e63",
    //   },
    //   rose: colors.rose,
    //   colors,
    // },
  },
  plugins: [],
};
