/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandPink: '#FF2D9A',
        brandPurple: '#7B2CFF',
        brandPeach: '#FFB3A7',
        brandDark: '#1A1A1A',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glossy: '0 18px 50px rgba(123, 44, 255, 0.16)',
        softPink: '0 18px 45px rgba(255, 45, 154, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.65', transform: 'scaleX(0.96)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseLine: 'pulseLine 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
