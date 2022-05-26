module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1fb6ff",
      secondary: "#7e5bef",
      w: "#fff",
      b: "#000",
      c: "#4c503d",
      d: "#ee4d2d",
      e: "#fbd232",
      f: "#221f20",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      x2: "1250px",
      xl: "1440px",
    },
  },
  plugins: [],
};
