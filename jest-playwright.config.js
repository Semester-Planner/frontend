module.exports = {
  browsers: ["chromium", "firefox", "webkit"],
  serverOptions: [
    {
      command: "npm start",
      host: "127.0.0.1",
      port: 3000,
      launchTimeout: 30000,
      debug: "true",
      options: {
        env: {
          BROWSER: "none",
        },
      },
    },
    {
      command: "cd ../backend && npm run setup:db && npm start",
      host: "127.0.0.1",
      port: 3001,
      launchTimeout: 30000,
      usedPortAction: "kill",
      options: {
        env: {
          NODE_ENV: "development",
          NOAUTH: "true",
        },
      },
    },
  ],
};
