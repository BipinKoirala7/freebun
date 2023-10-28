/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "#000000",
        "secondary-background": "#14213d",
        primary: "#e5e5e5",
        secondary: "#fca311",
      },
    },
  },
  plugins: [],
};

