const express = require('express');
const conditionsController = require('../Controller/ConditionsController');
const router = express.Router();



router.post('/conditions',conditionsController.conditions)


module.exports = router;