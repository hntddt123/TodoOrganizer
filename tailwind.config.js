module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#A9F05A',
        primary: '#62D948',
        dark: '#121212'
      },
      keyframes: {
        bounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        bounceOnce: 'bounce 1s'
      }
    }
  },
  plugins: [],
};
