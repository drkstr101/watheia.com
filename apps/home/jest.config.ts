/* eslint-disable */
export default {
  displayName: 'home',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      {
        presets: [
          [
            '@nrwl/next/babel',
            {
              runtime: 'automatic',
              useBuiltIns: 'usage',
            },
          ],
        ],
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/home',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
