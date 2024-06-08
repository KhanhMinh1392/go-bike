import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        green: {
          100: '#C3EFCC',
          400: '#38AF53',
          500: '#299040',
          600: '#257036',
          800: '#257036',
        },
        gray: {
          25: '#FCFCFC',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D1D1D6',
          700: '#3F3F46',
          800: '#1D4A29',
        },
        red: {
          500: '#F04438',
        },
        blue: {
          700: '#3342C5',
        },
        purple: {
          900: '#4F2584',
        },
        sands: {
          100: '#F0F1C7',
          600: '#A48A2A',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      lineHeight: {
        '11': '2.75rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
