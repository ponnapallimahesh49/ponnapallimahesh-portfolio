/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        // Your dark primary (already using slate-900)
        primary: {
          dark: '#0F172B',  // slate-900
        },
        // Light theme colors (we'll define these below)
        primary: {
          light: '#F1F5F9',  // slate-100, a soft light gray
        },
      }
     
    },
  },
  plugins: [],
};
