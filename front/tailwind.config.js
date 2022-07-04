/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 0px #4f96f6, 0 10px 100px #4f96f6',
      }
    },
  },
  plugins: [],
}
