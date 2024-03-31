/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  arrowParens: 'avoid',
  trailingComma: 'all',
  useTabs: false,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  tabWidth: 2,
  printWidth: 80,
}

export default config
