module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};