/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Ensures all your src files are scanned
  ],
  theme: {
    extend: {
      colors: {
        // Your Custom Brand Colors
        bgLight: '#F8F9FB', // The new subtle background color
        bluePText: '#7D8FB3',
        blueCardTitle: '#4D5E80',
        blueCardSubTitle: '#ADB8CC',
        bgDark: '#17202a',
        cardText: '#6B7A99',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
