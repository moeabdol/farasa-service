'use strict';

const router = require('express').Router();
const farasaController = require('../controllers/farasa');

router.post('/farasa/segment', farasaController.segment);

module.exports = router;
