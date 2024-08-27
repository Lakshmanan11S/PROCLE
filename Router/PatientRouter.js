const express = require('express');
const patientController = require('../Controller/PatientController');
const router = express.Router();

router.post('/patientcredentials',patientController.patientCredentials)
router.post('/gettoken',patientController.getToken)
router.post('/getpatientbyid',patientController.patientId)





module.exports = router;