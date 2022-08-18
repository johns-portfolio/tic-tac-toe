/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-show': 'ping-show 0.3s cubic-bezier(0, 0, 0.2, 1)',
      },
      keyframes: {
        'ping-show': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 100
          }
        }
      }
    },
  },
  plugins: [],
}