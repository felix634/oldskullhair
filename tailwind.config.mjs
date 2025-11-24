/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // --- OLD SKULL EGYEDI SZÍNEK ---
        'primary-dark': '#111111',       // Sötét Antracit / Fekete (fő szöveg, sötét háttér)
        'accent-gold': '#FFC300',        // Arany / Sárga (CTA, kiemelés)
        'bg-light': '#F8F8F8',           // Világos (szinte fehér) háttér
        'accent-purple': '#5E2180',      // Másodlagos akcentus (opcionális, de benne van a logóban)
      },
      fontFamily: {
        'title': ['Prata', 'serif'], // Címekhez (elegáns, vastag)
        'body': ['Inter', 'sans-serif'], // Törzsszöveghez (letisztult, modern)
      },
      // Keep existing animation and keyframes (Fade-in effekt megmarad)
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