// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
