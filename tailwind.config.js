/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#F4F8FD',
          100: '#E9F2FC',
          200: '#D3E5F9',
          300: '#BDD8F6',
          400: '#A7CBF3',
          500: '#227CE0',  // Original color
          600: '#1F70CA',
          700: '#1B63B3',
          800: '#18579D',
          900: '#144A86',
        },
        secondary: {
          50: '#FAF6FD',
          100: '#F5EEFC',
          200: '#EBDCF9',
          300: '#E1CBF6',
          400: '#D7B9F3',
          500: '#9B51E0',  // Original color
          600: '#8C49CA',
          700: '#7C41B3',
          800: '#6D399D',
          900: '#5D3186',
        },
        green: {
          50: '#F4FBF7',
          100: '#E9F7EF',
          200: '#D4EFDF',
          300: '#BEE7CF',
          400: '#A9DFBF',
          500: '#27AE60',  // Original color
          600: '#239D56',
          700: '#1F8B4D',
          800: '#1B7A43',
          900: '#17683A',
        },
        red: {
          50: '#FEF7F7',
          100: '#FDEEEE',
          200: '#FBDDDD',
          300: '#F9CDCD',
          400: '#F7BCBC',
          500: '#EB5757',  // Original color
          600: '#D44E4E',
          700: '#BC4646',
          800: '#A53D3D',
          900: '#8D3434',
        },
        // Additional single shades
        'dark-black': '#1B1B1F',
        'light-black': '#333333',
        'dark-white': '#F2F2F2',
        'light-white': '#FFFFFF',
        'dark-grey': '#4F4F4F',
        'light-grey': '#BDBDBD',
      },
    },
  },
  plugins: [],
};
