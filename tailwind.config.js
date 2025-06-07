/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Important for Vite projects
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // As used in the design
      },
      animation: {
        'gradient-xy': 'gradientXY 15s ease infinite',
      },
      keyframes: {
        gradientXY: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For the prose class used in case studies
  ],
}

