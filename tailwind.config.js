// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
   fontFamily: {
      'NunitoRegular': ['Nunito-Regular'],
      'NunitoMedium': ['Nunito-Medium'],
      'NunitoSemiBold': ['Nunito-SemiBold'],
      'NunitoBold': ['Nunito-Bold'],
      'NunitoExtraBold': ['Nunito-ExtraBold'],
    },
    extend: {
      screens: {
        '2xl': '1900px',
      },
      
    }
  }
  // ... other configurations
};
