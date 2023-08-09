/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#D0DDBE",
        button: "#d93532",
        buttonHover: "#DD4A48", 
        white: "#FAFAFA", 
        green: "#76998C",
      },
      fontFamily: {
        Laila: ["indieFlower", "cursive"],
      },
    },
  },
  plugins: [],
}
