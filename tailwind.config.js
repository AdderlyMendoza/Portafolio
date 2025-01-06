// tailwind.config.js
import animations from "tailwindcss-animated"

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animations],
};
