export default [
  {
    ignores: [
      'node_modules/**',
      'out/**',
      'artifacts/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',
      'dist/vendor/**',
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
  // Build/QA tools legitimately print reports; shipped game code may not.
  { files: ['tools/**', 'tests/**', 'e2e/**', '*.config.mjs'], rules: { 'no-console': 'off' } },
];
