import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/src/tests/test.env.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  }
}

export default config;