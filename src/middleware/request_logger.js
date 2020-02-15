'use strict';

const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  logger.info(`${req.ip} ${req.method} ${req.url}`);
  next();
};

module.exports = requestLogger;
