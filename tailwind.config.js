module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/background.png')",
      },
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
      old: '1 0 0',
    },

    screens: {
      xxs: '360px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',

      // => @media (min-width: 640px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
