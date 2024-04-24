/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url(/images/bg.png)",
      },
      // backgroundImage1: {
      //   home: "url(/images/home.png)",
      // },
    },
  },
  plugins: [],
};
