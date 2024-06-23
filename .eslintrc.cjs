module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-anonymous-default-export': 'off',
    'no-console': 'error',
    eqeqeq: 'error',
  },
}
