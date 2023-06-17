/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        background: "url('/img/background.webp')",
        "background-transparent": "url('/img/background-transparent.webp')",
        "card-background": "url('/img/card-background.webp')",
      },
      colors: {
        primary: "#8BAC3E",
        dark: "#333333",
        body: "#757575",
        "light-gray": "#F2F2F2",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
