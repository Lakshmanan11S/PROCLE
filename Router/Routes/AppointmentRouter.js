const express = require('express');
const appointmentController = require('../../Controller/AppointmentsController');
const router = express.Router();


router.get('/appointment',appointmentController.appointment)


module.exports = router;