module.exports = {
  rootDir: '..',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/01-js/tests/**/*.test.js', '<rootDir>/solutions/tests/**/*.test.js'],
  moduleNameMapper: { '^\\.\\./(easy|medium|hard)/(.*)$': '<rootDir>/solutions/01-js/$1/$2' },
};
