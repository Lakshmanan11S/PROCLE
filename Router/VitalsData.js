const express = require('express');
const vitalController = require('../Controller/VitalController');
const router = express.Router();


router.post('/vitallist',vitalController.vitalList)


module.exports = router;