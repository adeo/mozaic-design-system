export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'],
    'header-max-length': [2, 'always', 140],
  },
}
