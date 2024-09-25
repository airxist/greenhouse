/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fysi-green": "#002C17",
        active: "#E6ECE9",
        foundation: {
          DEFAULT: "#E6ECE9",
          grey: "#F9FAFB",
          700: "#B1B2B2",
          border: "#B0C3BA",
        },
        office: {
          brown: "#8D8484",
        },
        error: {
          DEFAULT: "#D42620",
        },
        "fysi-neutral": {
          DEFAULT: "#AAA3A3",
        },
        "fysi-gray": {
          thick: '#0C111D'
        }
      },
    },
  },
  plugins: [],
};
