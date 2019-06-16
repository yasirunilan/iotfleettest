var express = require('express');
var router = express.Router();
var morgan = require('morgan');
var winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/', function(req, res, next) {
    logger.log('error', 'post', req);
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
    logger.log('error', 'patch', req);
  res.render('index', { title: 'Express' });
});

module.exports = router;
