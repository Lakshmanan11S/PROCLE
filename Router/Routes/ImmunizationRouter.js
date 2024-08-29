const express = require('express');
const immunizationController = require('../../Controller/ImmunizationController');
const router = express.Router();


router.get('/immunization',immunizationController.immunizationData)




module.exports = router;