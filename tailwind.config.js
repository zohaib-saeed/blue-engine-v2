/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          main: '#FFFFFF',
          mercury: '#E9E9EA',
        },
        black: {
          50: '#E9E9EA',
          100: '#D2D2D5',
          200: '#A5A5AB',
          300: '#777980',
          400: '#4A4C56',
          500: '#1D1F2C',
          600: '#161721',
          700: '#0F1016',
          800: '#07080B',
          900: '#030304',
        },
        blue: {
          50: '#EEF8FF',
          100: '#D9EEFF',
          200: '#BCE2FF',
          300: '#8ED0FF',
          400: '#59B4FF',
          500: '#238CFF',
          600: '#1B74F5',
          700: '#145EE1',
          800: '#174CB6',
          900: '#19438F',
          950: '#101828',
        },
        gray: {
          0: '#f8f9fa',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#dee2e6',
          500: '#dee2e6',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      screens: {
        xxs: '370px', // Small phones
        xs: '480px', // Phones
        sm: '640px', // Tablets
        md: '768px', // Small laptops
        lg: '1024px', // Laptops
        sxl: '1120px',
        xl: '1280px', // Desktops
        '2xl': '1440px', // Large desktops
        '3xl': '1600px', // Extra large desktops
        '4xl': '1920px', // 4K screens
      },
    },
  },
  plugins: [],
};
