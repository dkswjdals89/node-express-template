const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const compressionFilter = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
};

/**
 * Express Setup
 */
module.exports = () => {
  const app = express();
  app.use(compression({ filter: compressionFilter }));
  app.use(helmet());

  return app;
};
