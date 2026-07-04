/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Superfícies — valores reais definidos como CSS vars em index.css (temas claro/escuro)
        base: {
          950: 'rgb(var(--c-bg0) / <alpha-value>)',
          900: 'rgb(var(--c-bg1) / <alpha-value>)',
          800: 'rgb(var(--c-bg2) / <alpha-value>)',
        },
        // Escala de texto tema-aware: ink-1 (mais forte) → ink-4 (mais suave)
        ink: {
          1: 'rgb(var(--c-ink1) / <alpha-value>)',
          2: 'rgb(var(--c-ink2) / <alpha-value>)',
          3: 'rgb(var(--c-ink3) / <alpha-value>)',
          4: 'rgb(var(--c-ink4) / <alpha-value>)',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
          purple: '#8b5cf6',
          gold: '#f5c451',
        },
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.45' },
          '80%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
