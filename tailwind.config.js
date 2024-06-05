module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tang: ["Tangerine", "serif"],
        ice: ["Iceberg", "sans-serif"],
        nosi: ["Nosifer", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}