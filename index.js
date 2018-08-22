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
    'comment-whitespace-inside': 'always',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'length-zero-no-unit': true,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'selector-pseudo-element-colon-notation': 'double'
  }
};
