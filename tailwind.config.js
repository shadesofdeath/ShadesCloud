/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'bounce': 'bounce 1s infinite',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};