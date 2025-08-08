
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'], // This line is crucial
      },
      colors: {
        'reviva-dark': '#1a3a30',
        'reviva-green': '#28a745',
        'reviva-light-green': '#90EE90',
      }
    },
  },
  plugins: [],
};
export default config;