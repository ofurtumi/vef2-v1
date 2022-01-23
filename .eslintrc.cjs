module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-restricted-syntax': 0,
      'import/prefer-default-export': 0,
      quotes: ['error', 'single'],
      'no-console': [
        'warn',
        {
          allow: ['log','warn', 'error', 'info', 'group', 'groupCollapsed', 'groupEnd'],
        },
      ],
      'import/extensions': 0,
      'no-await-in-loop': 0,
      'no-restricted-globals': 0,
      'prefer-destructuring': 0,
      'no-param-reassign': 0,
      'max-len': ['warn', {
        code: 100,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      }],
    },
  };