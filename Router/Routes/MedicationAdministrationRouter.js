const express = require('express');
const medicationAdminController = require('../../Controller/MedicationAdministrationController');
const router = express.Router();


router.get('/medicationadmin',medicationAdminController.medicationAdmin)


module.exports = router;