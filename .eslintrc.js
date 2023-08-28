module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:prettier/recommended',
  ],
}
