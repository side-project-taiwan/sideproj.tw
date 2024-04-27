/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: { max: '375px' },
      tablet: { max: '1024px' },
      desktop: { max: '1440px' },
    },
    colors: {
      primary: '#2563EB',
      'primary-light': '#DAEAFE',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }: { addUtilities: PluginAPI['addUtilities'] }) => {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
      })
    }),
  ],
}
