'use strict';

const { createLogger, format, transports } = require('winston');
const NODE_ENV = process.env.NODE_ENV;

let level;
if (NODE_ENV === 'test') level = 'error';
if (NODE_ENV === 'develepment') level = 'info';
if (NODE_ENV === 'production') level = 'info';

const logger = createLogger({
  level: level,
  format: format.combine(
    format.colorize(),
    format.simple(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.splat(),
    format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      maxSize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../../logs/logs`,
    }),
  ],
});

module.exports = logger;
