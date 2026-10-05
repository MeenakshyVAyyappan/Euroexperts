/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B',
        charcoal: '#141416',
        'charcoal-light': '#1C1C20',
        gold: {
          DEFAULT: '#FF6200',
          light: '#FFA048',
          dark: '#D84500',
        },
        brand: {
          orange: '#FF6200',
          amber: '#FFA048',
          dark: '#D84500',
          glow: 'rgba(255, 98, 0, 0.28)',
        },
        ivory: '#F4F1EA',
        muted: '#8A8A8F',
        japan: '#B3121B',
        america: '#1C2E4A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
