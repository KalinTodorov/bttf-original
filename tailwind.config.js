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
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
      3: '1 0 0',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
