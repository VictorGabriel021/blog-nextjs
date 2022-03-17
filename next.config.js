const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const configHandler = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "VictorGabriel021",
        mongodb_password: "VYcmnkv6yyvsqqo4",
        mongodb_clustername: "cluster0",
        mongodb_database: "myBlog-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "VictorGabriel021",
      mongodb_password: "VYcmnkv6yyvsqqo4",
      mongodb_clustername: "cluster0",
      mongodb_database: "myBlog",
    },
  };
};

/** @type {import('next').NextConfig} */
let nextConfig = {};

module.exports = (phase) => {
  nextConfig = configHandler(phase);
  return nextConfig;
};
