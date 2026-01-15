import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#313e3b',
          dark: '#313e3b',
        },
        accent: {
          DEFAULT: '#FF751F',
          orange: '#FF751F',
          yellow: '#d5d52c',
        },
        secondary: {
          'blue-dark': '#062346',
          blue: '#062346',
          'blue-light': '#0a2d5a',
          'blue-darker': '#041a2e',
        },
        gray: {
          100: '#f3f8f8',
          200: '#e4e4e4',
          300: '#dee2e6',
          400: '#828c8a',
        },
        text: {
          primary: '#313e3b',
          secondary: '#828c8a',
        },
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-2': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-2': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'xs': '5px',
        'sm': '10px',
        'md': '15px',
        'lg': '20px',
        'xl': '30px',
        '2xl': '35px',
        '3xl': '40px',
        '4xl': '50px',
        '5xl': '60px',
        '6xl': '70px',
        '7xl': '109px',
        '8xl': '110px',
        '9xl': '160px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '30px',
        'xl': '35px',
        '2xl': '40px',
        'full': '50px',
      },
      boxShadow: {
        'card': '0px 0px 25px 0px rgba(0,0,0,0.08)',
        'button': '0px 5px 20px 0px rgba(0,0,0,0.1)',
      },
      maxWidth: {
        'container': '1220px',
      },
    },
  },
  plugins: [],
};

export default config;
