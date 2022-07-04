/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'yellow1': '0 5px 0px #eab308, 0 10px 100px #fef08a',
        'yellow2': '0 5px 0px #ca8a04,0 7px 30px #fde047',
        'sky1': '0 5px 0px #0ea5e9,0 7px 30px #bae6fd',
        'sky2': '0 5px 0px #0284c7,0 7px 30px #7dd3fc',
      }
    },
  },
  plugins: [],
}
