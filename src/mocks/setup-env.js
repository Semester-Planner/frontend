import { server } from "./server.js";

// Establishes API mocking before all tests.
// Separate from the test file so that it can be used on multiple test suites at once.
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests.
afterEach(() => server.resetHandlers());

// Clean up after a test suite is finished.
afterAll(() => {
  server.close();
});
