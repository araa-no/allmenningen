/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FDFBF7', 100: '#FAF7F2', 200: '#F5F0E8', 300: '#EDE5D8', 400: '#E5DDD3', 500: '#D4C9BB' },
        rust: { 50: '#FBF2F0', 100: '#F5E0DB', 200: '#E8BFB6', 300: '#D4654A', 400: '#C45B4A', 500: '#A94D3E', 600: '#8C3F33' },
        grove: { 50: '#F2F7F3', 100: '#E2EDE5', 200: '#C5DCCB', 300: '#8FB89A', 400: '#6B8F71', 500: '#5A7A5A', 600: '#475E47' },
        bay: { 50: '#F0F5F8', 100: '#E0EAF0', 200: '#C0D5E3', 300: '#8FB0CA', 400: '#5E86A6', 500: '#4A6F8A', 600: '#3A5870' },
        ink: { 50: '#F5F3F0', 100: '#E8E4DF', 200: '#C8C1B8', 300: '#8A8279', 400: '#5C5650', 500: '#3A3530', 600: '#2D2A26' }
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        text: ['"DM Serif Text"', 'serif']
      }
    }
  },
  plugins: []
}
