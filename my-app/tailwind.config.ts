import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        taupe: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ebe7e2',
          300: '#dcd6cf',
          400: '#c8beb4',
          500: '#b3a595',
          600: '#9f8c7a',
          700: '#8a7563',
          800: '#726051',
          900: '#5d4e42',
          950: '#3a2f28',
        },
      },
    },
  },
  plugins: [

  ],
}; 

export default config;
