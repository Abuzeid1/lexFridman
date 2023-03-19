/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
};

module.exports = config;
