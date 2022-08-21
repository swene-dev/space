// tailwind.config.js
module.exports = {
 content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blackgray: '#4F4F4F',
        lightgray: '#EDEDED',
        orange: '#FF8000',
      },
    },
  },
  plugins: [],
}
