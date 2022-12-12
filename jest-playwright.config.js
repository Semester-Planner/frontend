module.exports = {
  launchOptions: {
    headless: "false",
  },
  serverOptions: [
    {
      command: "npm start",
      host: "localhost",
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
      command: "cd ../backend && npm start",
      host: "localhost",
      port: 3001,
      launchTimeout: 30000,
      debug: "true",
    },
  ],
};
