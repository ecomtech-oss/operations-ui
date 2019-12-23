module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/{!(index),}.{ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
