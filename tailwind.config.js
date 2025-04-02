/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
          geist: ["Geist", "monospace"],
        },
      },
    },
    darkMode: "class", // Enables dark mode
    plugins: [],
  };
  