
module.exports = {
  verbose: true,
  collectCoverage: true,
  forceExit: true,
  testEnvironment: 'node',
  coverageDirectory: "<rootDir>/../coverage/back",
  testMatch:[
    "<rootDir>/test/**/*.test.js"
  ],
};
