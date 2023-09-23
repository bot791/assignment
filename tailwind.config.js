/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        martian: ["'Martian Mono'", "monospace"],
        stylish: ["'Pacifico'", "cursive"],
        plain: ["'Lexend'", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
        lime: "0 0 5px theme('colors.lime.200'), 0 0 20px theme('colors.lime.700')",
        gray: "0 0 5px theme('colors.gray.200'), 0 0 20px theme('colors.gray.700')",
      },
    },
  },
  plugins: [],
};
