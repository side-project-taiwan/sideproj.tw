import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

const SOURCE_FILES = [
  'app/**',
  'components/**',
  'containers/**',
  'services/**',
  'libs/**',
  'utils/**',
]

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: './scripts/vitest/setup.ts',
    environmentMatchGlobs: [['{app,components,containers}/**', 'jsdom']],
    includeSource: SOURCE_FILES,
    include: ['**/__tests__/*.test.[jt]s?(x)'],
    exclude: [...configDefaults.exclude, '**/.next/**'],
    coverage: { provider: 'v8', include: SOURCE_FILES },
  },
})
