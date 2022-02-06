module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color": "#818cf8",
        "theme-color-hover": "#a5b4fc",

        "dark-bg-1": "#343942",
        "dark-bg-2": "#202225",

        "dark-mode-text": "#eff8fe",
      },
    },
  },
  plugins: [],
};
