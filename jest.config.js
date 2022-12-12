module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/components/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./src/mocks/setup-env.js"],
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["src", "node_modules"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["./node_modules/", "./e2e.test.js"],
};
