import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        'surface-card': 'var(--color-surface-card)',
        primary: 'var(--color-text-primary)',
        muted: 'var(--color-text-muted)',
        accent: {
          DEFAULT: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)',
          light: 'var(--color-accent-light)',
          glow: 'var(--color-accent-glow)',
        },
        border: 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Space Grotesk', 'monospace'],
      }
    },
  },
  plugins: [],
}
