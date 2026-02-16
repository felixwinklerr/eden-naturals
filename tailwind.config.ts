import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // From CONTEXT.md: Clean clinical premium
        // White (primary), Muted green (accent), Charcoal (text)
        primary: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
        },
        accent: {
          DEFAULT: '#6B8E6F', // Muted green
          light: '#8FA892',
          dark: '#4A6B4E',
        },
        text: {
          DEFAULT: '#2C2C2C', // Charcoal
          light: '#6B6B6B',
          muted: '#9B9B9B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
export default config
