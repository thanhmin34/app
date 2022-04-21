module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      primary: "#F77E2E",
      basic: "#023047",
      secondary: "#00AFAA",
      secon2: "#1bd741",
      w: "#fff",
    },
    screens: {
      s: { max: "540px" },
      s1: { min: "640px" },
      s2: { max: "640px" },
      sm: { max: "767px" },
      smin: { min: "767px" },
      // => @media (min-width: 576px) { ... }

      md: { max: "1023px" },
      xl: { min: "1024px" },
      // => @media (min-width: 960px) { ... }
    },
  },
  plugins: [],
};
