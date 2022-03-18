module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:ternary/recommended', // https://www.npmjs.com/package/eslint-plugin-ternary
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier' // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    'more',
    'react',
    '@typescript-eslint',
    'eslint-plugin-function-name',
    'eslint-plugin-ternary'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      0,
      'always'
    ],
    // no need if we are using Next
    'react/react-in-jsx-scope': 0,

    // plugin typescript-eslint
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    // plugin 'eslint-plugin-function-name'
    'function-name/starts-with-verb': 'error',

    // plugin 'more' (package eslint-plugin-more)
    'more/no-void-map': 2,
    'more/no-c-like-loops': 2,
    'more/prefer-includes': 2,
    'more/no-then': 2,
    'more/no-window': 2,
    'more/no-numeric-endings-for-variables': 2,
    'more/no-filter-instead-of-find': 2,
    'more/force-native-methods': 2,
    'more/no-duplicated-chains': 2,
    'more/classbody-starts-with-newline': [2, 'never'],
    'more/no-hardcoded-password': 2,
    'more/no-hardcoded-configuration-data': 2
  }
};
