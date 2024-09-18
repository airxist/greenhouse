/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#002C17",
        active: "#E6ECE9",
      },
    },
  },
  plugins: [],
};
