module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  moduleNameMapper: {
    "@/(.*)":  "<rootDir>/src/$1",
  },
  // coverageThreshold: {
  //   global: {
  //     branches: 5,
  //     functions: 5,
  //     lines: 5,
  //     statements: 5,
  //   }
  // },
  collectCoverageFrom: [
    'src/**/*.js',
  ]
};
