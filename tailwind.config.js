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
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
