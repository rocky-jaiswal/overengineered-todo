module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'next/core-web-vitals',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off'
  }
}
