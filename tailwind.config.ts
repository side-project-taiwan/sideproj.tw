import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      screens: {
        mobile: { max: '375px' },
        tablet: { max: '1024px' },
        desktop: { max: '1440px' },
      },
      colors: {
        white: '#FFFFFF',
        'blue-50': '#EFF6FF',
        'blue-100': '#DAEAFE',
        'blue-200': '#BFDBFE',
        'blue-300': '#93C5FD',
        'blue-400': '#60A5FA',
        'blue-500': '#3B82F6',
        'blue-600': '#2563EB',
        'blue-700': '#1D4ED8',
        'blue-800': '#1E40AF',
        'blue-900': '#1E3A8A',
        'zinc-50 ': '#FAFAFA',
        'zinc-100': '#F4F4F5',
        'zinc-200': '#E4E4E7',
        'zinc-300': '#D4D4D8',
        'zinc-400': '#A1A1AA',
        'zinc-500': '#71717A',
        'zinc-600': '#52525B',
        'zinc-700': '#3F3F46',
        'zinc-800': '#27272A',
        'zinc-900': '#18181B',
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

export default config
