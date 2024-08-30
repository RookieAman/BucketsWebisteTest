import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#2D0F01',
        secondary: '#FFF7CA',
        darkchoco: '#361505',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        champBlack: ['var(--font-champBlack)'],
      },
    },
  },
  plugins: [],
}
export default config
