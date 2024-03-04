  module.exports = {
    apps: [
      {
        name: `nutri.macero.cl`,
        script: "serve",
        env: {
          PM2_SERVE_PATH: "./dist",
          PM2_SERVE_PORT: 3175,
          PM2_SERVE_SPA: "true",
          NODE_ENV: 'production',
        },
      },
    ],
  };