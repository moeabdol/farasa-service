'use strict';

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: {
      title: 'Something went wrong',
      text: 'Something went wrong',
    },
  });
};

module.exports = errorHandler;
