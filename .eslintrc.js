module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
