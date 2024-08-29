const express = require('express');
const conditionsController = require('../../Controller/ConditionsController');
const router = express.Router();



router.get('/conditions',conditionsController.conditions)


module.exports = router;