module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'color-hex-length': 'short',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands']
      }
    ],
    'comment-whitespace-inside': 'always',
    'declaration-empty-line-before': 'never',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'length-zero-no-unit': true,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-max-precision': 10,
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'value-keyword-case': 'lower',

    // order
    'order/properties-alphabetical-order': true,

    // scss
    'scss/at-rule-no-unknown': true,
    'scss/selector-no-union-class-name': true
  }
};
