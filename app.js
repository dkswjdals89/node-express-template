const express = require('./config/express');
const envConfig = require('./config/environment');

const app = express();

app.server = app.listen(envConfig.port, envConfig.ip, () => {
  console.info(`Express server listening on ${envConfig.port}, in ${envConfig.env} mode`);
});

module.exports = app;
