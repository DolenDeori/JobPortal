/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      HostGroteskRegular: ["HostGroteskRegular", "sans-serif"],
      HostGroteskMedium: ["HostGroteskMedium", "sans-serif"],
      HostGroteskBold: ["HostGroteskBold", "sans-serif"],
    },
  },
  plugins: [],
};
