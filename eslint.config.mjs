import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTypescript,
  { ignores: ['playwright-report/**', 'test-results/**'] },
  {
    rules: {
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
];

export default config;
