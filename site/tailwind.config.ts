import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
        },
        dark: '#020617',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.35)',
      },
    },
  },
  plugins: [],
}

export default config
