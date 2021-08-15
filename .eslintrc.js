module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 'off',
    // indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
  },
};
