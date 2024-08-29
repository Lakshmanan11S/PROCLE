const express = require('express');
const medicationController = require('../../Controller/MedicationController');
const router = express.Router();


router.get('/medication',medicationController.medication)


module.exports = router;