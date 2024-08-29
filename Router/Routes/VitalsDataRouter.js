const express = require('express');
const vitalController = require('../../Controller/VitalController');
const router = express.Router();



router.get('/vitallist',vitalController.vitalList)


module.exports = router;