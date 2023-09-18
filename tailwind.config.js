/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      newsletterBG: "url('./assets/orange-bg.jpg')",
      aboutUsHero: "url('./assets/diced-fruits.jpg')",
      shopHero: "url('./assets/shop-hero-bg.jpg')",
      cartHero: "url('./assets/cart-hero-bg.jpg')",
    },
    fontFamily: {
      body: ['"Open Sans"', "sans-serif"],
      heading: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};

import bg from "./";
