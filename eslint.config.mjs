import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  {
    rules: {
      'react/display-name': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
];

export default config;
