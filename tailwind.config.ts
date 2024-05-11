import type { PluginAPI, Config } from 'tailwindcss/types/config'
import resolveConfig from 'tailwindcss/resolveConfig'
import plugin from 'tailwindcss/plugin'

export const SCREEN = {
  mobile: '375px',
  tablet: '1024px',
  desktop: '1440px',
} as const

const config = {
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
      screens: SCREEN,
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          mobile: '0',
          tablet: '0',
          desktop: '0',
        },
        screens: {
          mobile: '100%',
          tablet: '800px',
          desktop: '800px',
        },
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
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
        'zinc-50': '#FAFAFA',
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: 'calc(var(--radius) - 6px)',
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

// FIXME: This is a workaround with any to avoid the type error
export const TAILWIND_CONFIG = resolveConfig<any>(config)

export default config
