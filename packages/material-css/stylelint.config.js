module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'at-rule-no-unknown': null,
    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
    'selector-class-pattern': null,
  },
}
