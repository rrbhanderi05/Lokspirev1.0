/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#b3e0ff',
          200: '#80caff',
          300: '#4db3ff',
          400: '#1a9dff',
          500: '#007acc',
          600: '#0062a3',
          700: '#00497a',
          800: '#003152',
          900: '#001829',
        },
        teal: {
          50: '#e6fff9',
          100: '#b3ffef',
          200: '#80ffe5',
          300: '#4dffdc',
          400: '#1affd2',
          500: '#00e6b8',
          600: '#00bfa6',
          700: '#00997f',
          800: '#006652',
          900: '#003329',
        },
        blue: {
          50: '#e6f0f2',
          100: '#b3d6db',
          200: '#80bcc4',
          300: '#4da3ad',
          400: '#1a8996',
          500: '#007080',
          600: '#005f73',
          700: '#004d5e',
          800: '#003a48',
          900: '#001c24',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};