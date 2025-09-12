/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1e293b',        // 기본 네이비
        'navy-dark': '#0f172a',   // 다크 네이비
        'navy-light': '#334155',  // 밝은 네이비(필요시)
        'btn-green': '#e6f5b1',   // 연두
        'btn-blue': '#aee7fa',    // 하늘
        'btn-yellow': '#ffe6a1',  // 노랑
        'btn-pink': '#ffd1e1',    // 분홍
      },
    },
  },
  plugins: [],
}

