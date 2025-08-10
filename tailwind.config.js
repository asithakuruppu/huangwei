import typography from '@tailwindcss/typography';
import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false, // Completely disable dark mode
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Your custom theme values
      colors: {
        'base-light': '#eeede8',
        'base-medium': '#f7f7f5', // Uncommented this since you're using it
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
    scrollbarHide,
  ],
};