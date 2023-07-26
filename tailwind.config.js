/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-image': "url('/images/team.png')",
      }
    },
  },
  plugins: [],
}