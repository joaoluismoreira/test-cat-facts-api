module.exports = {
    transform: {
      '^.+\\.ts$': 'ts-jest', // Use ts-jest for TypeScript files
    },
    moduleFileExtensions: ['ts', 'js'], // Recognize .ts and .js files
    testMatch: ['**/?(*.)+(spec|test).[tj]s'], // Recognize test files
  };