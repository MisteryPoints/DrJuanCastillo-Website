/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../../public/hero.webp')",
        heromd: "url('../../public/hero-md.png')",
        herosm: "url('../../public/hero-sm.png')",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#b49c73",
        tx: "#b2b2b8",
        bgDark: "#343a40",
        bgDarkSec: "#6c757d",
        golden: "#B18C56",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      screens: {
        "3xl": { min: "1850px" },
        xs: { min: "420px" },
        xxs: { min: "300px" },
      },
    },
  },
  plugins: [],
};
