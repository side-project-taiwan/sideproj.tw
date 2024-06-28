import type { PluginAPI, Config } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import { COLOR, SCREEN, BORDER_RADIUS } from './styles/tailwind'

const CONFIG = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
    './libs/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    extend: {
      zIndex: {
        navbar: '3000',
        announcement: '3001',
        overlay: '3002',
        modal: '3003',
        drawer: '3004',
        dropdown: '3005',
        tooltip: '3006',
        popover: '3007',
        toast: '3008',
      },
      screens: SCREEN,
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          tablet: '0',
          desktop: '0',
        },
        screens: {
          tablet: '800px',
          desktop: '800px',
        },
      },
      colors: COLOR,
      borderRadius: BORDER_RADIUS,
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
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
      })
    }),
  ],
} satisfies Config

export default CONFIG
