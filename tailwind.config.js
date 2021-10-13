module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{tsx,ts,js,jsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          medium: "#ff9635",
          hover: "#FF8718"
        },
        gray: {
          post: "#E5E5E5",
          light: "#ACACAC",
          hover: "#929292"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
