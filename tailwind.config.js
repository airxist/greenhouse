/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fysi-green": { DEFAULT: "#002C17", 500: "#003E20" },
        active: "#E6ECE9",
        foundation: {
          DEFAULT: "#E6ECE9",
          100: "#B0C3BA",
          grey: "#F9FAFB",
          700: "#B1B2B2",
          border: "#B0C3BA",
          600: "#E3E4E4",
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
          thick: "#0C111D",
        },
      },
    },
  },
  plugins: [],
};
