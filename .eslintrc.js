module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    // indent: ['warn', 2],
    'no-debugger': 'error',
    'no-console': 1,
    'no-multiple-empty-lines': 2,
    'no-mixed-spaces-and-tabs': 1,
    'no-multi-spaces': 2,
    'space-infix-ops': 1,
    'no-new-func': 2,
    'no-redeclare': 2,
    'no-implied-eval': 2,
    'multiline-ternary': ['warn', 'always-multiline'],
    // "no-unexpected-multiline": "error"
  }
}
