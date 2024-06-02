module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'no-console': 'error',
    eqeqeq: 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        caughtErrors: 'all',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': 'error',
  },
}
