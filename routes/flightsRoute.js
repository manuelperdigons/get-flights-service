const express = require('express');
const flightControlller = require('../controllers/index');

const router = express.Router();

router.get('/', flightControlller.response);

module.exports = router;