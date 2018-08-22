module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'content',
          'debug',
          'each',
          'else',
          'else if',
          'error',
          'extend',
          'for',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'warn',
          'while'
        ]
      }
    ],
    'at-rule-no-vendor-prefix': true,
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'selector-pseudo-element-colon-notation': 'double'
  }
};
