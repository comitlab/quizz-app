module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage/front",
  testMatch:[
    "<rootDir>/src/**/*.spec.ts"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/*.mock.ts",
    "!<rootDir>/src/**/*.module.ts",
    "!<rootDir>/src/**/*.model.ts",
    "!<rootDir>/src/**/*-routes.ts",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/environments/**/*.ts",
    "!<rootDir>/src/main.ts",
    "!<rootDir>/src/polyfills.ts",
  ]
};
