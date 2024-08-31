/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010409",
        secondary: "#1c242b",
        tertiary: "#444c53",
        info: "#f9dc5c",
        danger: "#c85940",
        success: "#5dc840",
      },
    },
  },
  plugins: [],
};
