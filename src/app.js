'use strict';

require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./utils/logger');
const requestLogger = require('./middleware/request_logger');
const errorHandler = require('./middleware/error_handler');
const routes = [require('./routes/farasa')];

const app = express();

app.use(requestLogger);
app.use(helmet());
app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.json());
app.use('/api/v1/', routes);
app.use(errorHandler);

app.listen(PORT, () =>
  logger.info(`[app.js] Server listening on port ${PORT}`)
);
