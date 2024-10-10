import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(36, 59, 199)',
        secondary: '#6AF6D7',
        black0: '#1A1A3C',
        grey0: '#7D85A3',
        highlight: 'rgb(235, 238, 255)',
        accent: 'rgb(15, 34, 152)',
      },
      gradientColorStops: {
        start: '#6AF6D7',
        end: '#58D3FC',
      },
      borderRadius: {
        lg: '12px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans'],
      },
    },
  },

  plugins: [],
};
export default config;
