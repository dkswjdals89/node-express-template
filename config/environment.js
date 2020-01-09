const { ENVIRONMENT } = require('../constant/environment');

const environment = {
  env: process.env.NODE_ENV || ENVIRONMENT.DEVELOPMENT,
  ip: process.env.IP || undefined,
  port: process.env.PORT || 8080,
  healthCheck: process.env.HEALTH_CHECK_URL || '/health',
  timezone: process.env.TZ || 'Asia/Seoul',
};

module.exports = environment;
