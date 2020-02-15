'use strict';

const router = require('express').Router();
const farasaController = require('../controllers/farasa');

router.post('/farasa/segment', farasaController.segment);
router.post('/farasa/pos', farasaController.pos);
router.post('/farasa/ner', farasaController.ner);

module.exports = router;
