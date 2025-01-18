module.exports = {
    apps: [
      {
        name: "my-app", // Name of the app
        script: "./index.js", // Path to your main app file
        watch: false, // Disable file watching in production
        env: {
          NODE_ENV: "production", // Environment variables
          PORT: 1234, // Application port
        },
      },
    ],
  };
  