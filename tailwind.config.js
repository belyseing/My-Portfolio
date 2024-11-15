/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ["Dancing Script", "serif"],
      },
      colors: {
        "deep-black": "#06050E",
      },
    },
  },
  plugins: [],
};
