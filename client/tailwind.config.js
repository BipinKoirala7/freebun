/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "#323437",
        "secondary-background": "#14213d",
        primary: "#e5e5e5",
        secondary: "#fca311",
      },
      fontFamily: {
        primary: ["'Pridi'", "sans-serif"],
        secondary: ["'Fira Code'", "sans-serif"],
        third: ["'Hind'", "sans-serif"],
        title: ["'Rubik Microbe'", "sans-serif"],
      },
      gridTemplateRows: {
        "home-grid": "1fr 3fr 2fr",
      },
    },
  },
  plugins: [],
};

