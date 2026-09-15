/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink:'#102A43', brand:'#13599B', gold:'#F5A623', surface:'#F4F6F8' },
      fontFamily: { sans:['Inter','ui-sans-serif','system-ui','sans-serif'] },
      boxShadow: { soft:'0 12px 40px rgba(16,42,67,.10)', card:'0 2px 12px rgba(16,42,67,.06)' }
    }
  }, plugins: []
}
