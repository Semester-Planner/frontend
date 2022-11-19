module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["utils", __dirname],
};
