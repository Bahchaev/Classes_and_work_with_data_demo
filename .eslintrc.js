module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              [
                // Packages `vue` related packages come first.
                '^vue', '^@?\\w',
                // Components.
                // '\\/[A-Z][a-z,A-Z]', '\\/components/[a-z,A-Z]"',
                // Internal packages.
                '^(@|components)(/.*|$)',
                // Side effect imports.
                '^\\u0000',
                // Parent imports. Put `..` last.
                '^\\.\\.(?!/?$)', '^\\.\\./?$',
                // Other relative imports. Put same-folder imports and `.` last.
                '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$',
                // Style imports.
                '^.+\\.?(css)$'
              ]
            ]
          }
        ]
      }
    }
  ],
  rules: {
    'linebreak-style': ['off'],
    'import/extensions': ['off'],
    'no-plusplus': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'space-before-function-paren': ['error'],
    'no-console': ['off'],
    'no-param-reassign': [
      'error', {
        props: true,
        ignorePropertyModificationsForRegex: ['^state'],
        ignorePropertyModificationsFor: ['acc']
      }
    ],
    'no-return-await': ['off'],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'max-len': ['off'],
    'no-undef': 'off',
    'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    semi: ['warn', 'never'],
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    'import/order': 'off',
    'simple-import-sort/imports': 'warn'
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.ts', '.json', '.js', '.vue']
      }
    }
  }
}
