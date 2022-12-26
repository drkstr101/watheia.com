const defaultTheme = require('tailwindcss/defaultTheme');

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
      fontFamily: {
        mono: ["'Fira Mono'", ...defaultTheme.fontFamily.mono],
        sans: ["'Fira Sans Condensed'", ...defaultTheme.fontFamily.sans],
      },
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
