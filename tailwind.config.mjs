/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary brand color - Dorado elegante
        primary: {
          DEFAULT: '#D4AF37',
          light: '#E5C85F',
          dark: '#B39430',
        },
        // Secondary color - Taupe suave
        secondary: {
          DEFAULT: '#C8B8A8',
          light: '#D9CFC5',
          dark: '#A89888',
        },
        // Accent color - Rosa suave
        accent: {
          DEFAULT: '#FFB6C1',
          light: '#FFD4D9',
          dark: '#FF98A5',
        },
        // Neutral colors - Beiges y grises
        neutral: {
          beige: '#F5F5DC',
          'beige-light': '#FDFDF5',
          'beige-dark': '#E0E0C8',
          gray: '#2C2C2C',
          'gray-medium': '#6B7280',
          'gray-light': '#9CA3AF',
        },
        // Surface colors - Fondos
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#FAFAFA',
          beige: '#F5F5DC',
        },
      },
      fontFamily: {
        bodoni: ['Bodoni Moda', 'serif'],
        vibes: ['Great Vibes', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
