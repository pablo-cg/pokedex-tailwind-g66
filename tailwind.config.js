module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "rgba(236, 165, 57, 1)",
        crimsom: "rgba(192, 14, 32, 1)",
        tomato: "rgba(242, 37, 57, 1)",
        dark: "rgba(53, 53, 53, 1)",
        lightDark: "rgba(94, 94, 94, 1)",
        grey: "rgba(191, 191, 191, 1)",
        lightGrey: "rgba(232, 232, 232, 1)",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    dropShadow: {
      footer: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [],
};
