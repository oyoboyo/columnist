// Require to transpile Columnist modules
const withTM = require("next-transpile-modules")([
  "@columnist/core",
  "@columnist/bootstrap",
]);

// Webpack configuration and module exports
module.exports = withTM({
  env: {
    apiUrl: "http://localhost:3000/api",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, buffer: false };
    return config;
  },
});
