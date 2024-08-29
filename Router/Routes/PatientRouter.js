const express = require('express');
const patientController = require('../../Controller/PatientController');
const router = express.Router();


router.get('/patientcredentials',patientController.patientCredentials)
router.get('/gettoken',patientController.getToken)
router.get('/getpatientbyid',patientController.patientId)





module.exports = router;