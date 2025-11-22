/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // <-- CRITICAL: Must include './src/**/*.{astro...}'
  theme: {
    extend: {
      colors: {
        'primary-dark': '#3a3a3a', 
        'accent': '#A0A0A0',      
      },
      fontFamily: {
        'sans': ['Playfair Display', 'serif'], 
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}