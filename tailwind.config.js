/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          bg: '#12100E',
          surface: '#181412',
          card: '#1E1916',
          'card-hover': '#28221E',
          border: '#3D332C',
          'border-light': '#5A4C42',
          gold: '#D4AF37',
          'gold-light': '#F3E5AB',
          'gold-dark': '#9A7B1C',
          terracotta: '#C85A32',
          'terracotta-dark': '#9E3C1B',
          sandstone: '#D97736',
          cream: '#F5EBE6',
          linen: '#E8DFD8',
          muted: '#A3968C',
          dark: '#0A0807',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'parchment-pattern': "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
        'hero-gradient': "linear-gradient(to bottom, rgba(18, 16, 14, 0.4), rgba(18, 16, 14, 0.95))",
        'gold-glow': "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15), transparent 70%)",
      },
      boxShadow: {
        'museum': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.2)',
        'terracotta-glow': '0 0 25px rgba(200, 90, 50, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
