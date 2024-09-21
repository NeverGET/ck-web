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
          900: '#07192d',
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
        'dark-black-transparent': '#1B1B1FCC',
        'light-black': '#202025',
        'light-black-transparent': '#202025CC',
        'dark-white': '#F2F2F2',
        'dark-white-transparent': '#F2F2F2CC',
        'light-white': '#FFFFFF',
        'light-white-transparent': '#FFFFFFCC',
        'dark-grey': '#2b2b32',
        'dark-grey-transparent': '#2b2b32CC',
        'light-grey': '#d0d0e1',
        'light-grey-transparent': '#d0d0e1CC',
      },
      dropShadow: {
        'svg-light': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'svg-dark': '0px 0px 2px rgba(255, 255, 255, 0.75)',
      },
    },
  },
  plugins: [],
};
