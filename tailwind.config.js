module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00A5BF',
        },
        night: {
          900: '#2E3440',
          800: '#3B4252',
          700: '#434C5E',
        },
        snow: {
          900: '#D8DEE9',
          800: '#E5E9F0',
          700: '#ECEFF4',
        },
      },
      height: {
        header: '64px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
