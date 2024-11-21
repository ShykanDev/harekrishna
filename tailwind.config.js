/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Fuentes personalizadas
      fontFamily: { 
        'poppins': ['Poppins', 'sans-serif'],
        'sour-gummy': ['Sour Gummy', 'cursive'],
        'funnel-display': ['Funnel Display'],

        'oleo-script': ['Oleo Script', 'cursive'],
      },
    },
  },
  plugins: [
    tailwindcssAnimated,
  ],
};
