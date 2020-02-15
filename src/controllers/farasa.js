'use strict';

const logger = require('../utils/logger');
const exec = require('child_process').exec;
const fs = require('fs');

const segment = (req, res, next) => {
  logger.info(
    '[controllers/farasa.js] segment req.query %o req.body %o',
    req.query,
    req.body
  );

  try {
    const input = req.body.text;
    fs.writeFileSync(
      '/Users/msaed/Documents/MoJ/farasa-service//tmp/input.txt',
      input
    );

    exec(
      'java -jar /Users/msaed/Documents/MoJ/farasa-service/lib/FarasaSegmenter/FarasaSegmenterJar.jar -i /Users/msaed/Documents/MoJ/farasa-service/tmp/input.txt -o /Users/msaed/Documents/MoJ/farasa-service/tmp/output.txt',
      (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        } else {
          const output = fs.readFileSync(
            '/Users/msaed/Documents/MoJ/farasa-service/tmp/output.txt',
            'utf8'
          );
          res.status(200).json(output);
        }
      }
    );
  } catch (error) {
    logger.error('%o', error);
    next(error);
  }
};

const pos = (req, res, next) => {
  logger.info(
    '[controllers/farasa.js] pos req.query %o req.body %o',
    req.query,
    req.body
  );

  try {
    const input = req.body.text;
    fs.writeFileSync(
      '/Users/msaed/Documents/MoJ/farasa-service//tmp/input.txt',
      input
    );

    exec(
      'java -jar /Users/msaed/Documents/MoJ/farasa-service/lib/FarasaPOS/FarasaPOSJar.jar -i /Users/msaed/Documents/MoJ/farasa-service/tmp/input.txt -o /Users/msaed/Documents/MoJ/farasa-service/tmp/output.txt',
      (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        } else {
          const output = fs.readFileSync(
            '/Users/msaed/Documents/MoJ/farasa-service/tmp/output.txt',
            'utf8'
          );
          res.status(200).json(output);
        }
      }
    );
  } catch (error) {
    logger.error('%o', error);
    next(error);
  }
};

const ner = (req, res, next) => {
  logger.info(
    '[controllers/farasa.js] ner req.query %o req.body %o',
    req.query,
    req.body
  );

  try {
    const input = req.body.text;
    fs.writeFileSync(
      '/Users/msaed/Documents/MoJ/farasa-service/tmp/input.txt',
      input
    );

    exec(
      'java -jar /Users/msaed/Documents/MoJ/farasa-service/lib/FarasaNER/FarasaNERJar.jar -i /Users/msaed/Documents/MoJ/farasa-service/tmp/input.txt -o /Users/msaed/Documents/MoJ/farasa-service/tmp/output.txt',
      (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        } else {
          const output = fs.readFileSync(
            '/Users/msaed/Documents/MoJ/farasa-service/tmp/output.txt',
            'utf8'
          );
          res.status(200).json(output);
        }
      }
    );
  } catch (error) {
    logger.error('%o', error);
    next(error);
  }
};

module.exports = {
  segment,
  pos,
  ner,
};
