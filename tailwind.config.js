/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        knight: {
          navy: '#112866',
          red: '#CB0E0E',
        }
      }
    }
  },
  plugins: [],
}
