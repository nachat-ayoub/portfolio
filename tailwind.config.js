/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#6C757D',
        dark: '#181A24',
      },

      animation: {
        fadeDown: 'fadeDown 0.2s ease-in-out forwards',
      },
      animation: {
        dot_to_bar: 'dot_to_bar 0.2s ease-in-out forwards',
      },
      keyframes: {
        fadeDown: {
          '0%': {
            transform: 'translateY(-15px) scaleY(1)',
            opacity: 0,
          },
          '50%': {
            transform: 'translateY(50px) scaleY(0.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'translateY(0px) scaleY(1)',
            opacity: 1,
          },
        },
        dot_to_bar: {
          '0%': {
            width: '0.5rem',
          },
          '100%': {
            width: '3rem',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
