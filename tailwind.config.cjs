/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
        fontFamily: {
            inter: ['Inter'],
        },    
    },
  },

  plugins: [
    // require('@tailwind/aspect-ratio'),
    // require('@tailwind/typography'),
    // require('@tailwind/forms'),
],
};

module.exports = config;
