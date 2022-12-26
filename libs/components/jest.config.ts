/* eslint-disable */
export default {
  displayName: 'components',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      {
        presets: [
          [
            '@nrwl/react/babel',
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
  coverageDirectory: '../../coverage/libs/components',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
