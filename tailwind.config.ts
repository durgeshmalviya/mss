/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#FAD0C4',
        'wedding-blue': '#A2DFF7',
      },fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      
    },
    },
  },
plugins: [require("tailwindcss-animate")],
};
