/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Night-sky token system
        night: {
          950: '#04060d', // deepest space, top of gradient
          900: '#080e1c',
          800: '#0d1730',
          700: '#13204a', // midnight blue, bottom of gradient
        },
        star: {
          light: '#fef9e7', // warm starlight white
          soft: '#fdf1c9',
        },
        moon: {
          glow: '#ffe9b3', // warm gold moon glow
          core: '#fff6de',
        },
        blush: {
          400: '#ffc9d6', // soft warm pink accent, used sparingly
          500: '#ffb4c6',
        },
      },
      fontFamily: {
        // Brief mandates a single typeface everywhere
        hand: ['Caveat', 'cursive'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        'pulse-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px rgba(255,233,179,0.35))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(255,233,179,0.65))' },
        },
      },
      animation: {
        twinkle: 'twinkle 3.2s ease-in-out infinite',
        drift: 'drift 90s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
