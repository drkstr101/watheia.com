module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {},
      typography: {},
      colors: {},
      spacing: {},
      fontFamily: {},
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
