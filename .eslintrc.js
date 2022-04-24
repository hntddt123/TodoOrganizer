module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'warn',
    'no-underscore-dangle': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'error',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'warn',
    'object-curly-newline': 'off',
    'default-case': 'off',
    'object-shorthand': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-return-assign': 'warn',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'warn',
    'max-len': ['warn', { code: 150 }],
    'jsx-quotes': ['error', 'prefer-single']
  },
};
