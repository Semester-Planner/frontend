module.exports = {
  preset: "jest-playwright-preset",
  globals: {
    PATH: "http://localhost:3000",
  },
  testMatch: ["**/*e2e.test.js"],
};
