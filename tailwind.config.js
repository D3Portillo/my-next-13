/** @type { import("tailwindcss").Config } */

module.exports = {
  content: [
    "./pages/*.{tsx,js}",
    "./pages/**/*.{tsx,js}",
    "./components/*.{tsx,js}",
    "./components/**/*.{tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        some: {
          color: "#00f900",
        },
      },
    },
  },
  plugins: [],
}
