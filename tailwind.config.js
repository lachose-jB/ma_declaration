/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f2ff',
        'cyber-purple': '#9e00ff',
        'cyber-pink': '#ff00f2',
        'cyber-black': '#0a0a0a',
        'cyber-dark': '#121212',
        'cyber-gray': '#1e1e1e',
        'steel-blue': '#4682b4',
      },
      fontFamily: {
        cyber: ['Rajdhani', 'sans-serif'],
        elegant: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f2ff, 0 0 10px #00f2ff, 0 0 15px #00f2ff, 0 0 20px #00f2ff',
        'neon-purple': '0 0 5px #9e00ff, 0 0 10px #9e00ff, 0 0 15px #9e00ff, 0 0 20px #9e00ff',
        'neon-pink': '0 0 5px #ff00f2, 0 0 10px #ff00f2, 0 0 15px #ff00f2, 0 0 20px #ff00f2',
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};