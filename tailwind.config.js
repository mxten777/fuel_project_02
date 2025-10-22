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
        // core brand
        primary: {
          50: '#f5f9ff',
          100: '#eaf3ff',
          200: '#cfe7ff',
          300: '#9fd0ff',
          400: '#66b6ff',
          500: '#2563eb', // used as --color-primary
          600: '#1f4fd1',
          700: '#183b9a',
          800: '#112760',
          900: '#08132a',
        },
        secondary: {
          50: '#fff8f3',
          100: '#fff0e6',
          200: '#ffdccb',
          300: '#ffbfa0',
          400: '#ff9a66',
          500: '#ff7a33',
        },
        neutral: {
          50: '#fafafa',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#0b1220',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        glass: 'rgba(255,255,255,0.06)',
        // legacy/navy aliases kept for compatibility
        'navy': '#1e293b',
        'navy-dark': '#0f172a',
        'navy-light': '#334155',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'xs-soft': '0 1px 2px rgba(16,24,40,0.04)',
        'sm-soft': '0 6px 18px rgba(16,24,40,0.06)',
        'md-soft': '0 12px 30px rgba(16,24,40,0.08)',
        'elev-1': '0 4px 14px rgba(16,24,40,0.08)',
        'elev-2': '0 8px 30px rgba(16,24,40,0.12)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.05' }],
        'h2': ['2rem', { lineHeight: '1.1' }],
        'h3': ['1.5rem', { lineHeight: '1.15' }],
        'body-lg': ['1.125rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.3' }],
      },
      fontFamily: {
        'sans': [
          'Inter',
          'Pretendard',
          'Noto Sans KR',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

