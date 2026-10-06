/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#14161F',
          light: '#1F222E',
          dark: '#0E1017',
        },
        'obsidian-light': '#1F222E',
        charcoal: {
          DEFAULT: '#1A1D28',
          light: '#252938',
        },
        'charcoal-light': '#252938',
        titanium: '#2D3242',
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
        ivory: '#FAF9F5',
        muted: '#B0B5C4',
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
