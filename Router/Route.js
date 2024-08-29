const express = require('express');
const router = express.Router();

const patientRouter = require('../Router/Routes/PatientRouter');
const vitalsRouter = require('../Router/Routes/VitalsDataRouter');
const allergyRouter = require('../Router/Routes/AllergyDataRouter');
const immunizationRouter = require('../Router/Routes/ImmunizationRouter');
const conditionsRouter = require('../Router/Routes/ConditionsRouter');
const providerRouter = require('../Router/Routes/ProviderRouter');
const medicationAdminstrations = require('../Router/Routes/MedicationAdministrationRouter');
const medicationRouter = require('../Router/Routes/MedicationRouter');
const appointmentRouter = require('../Router/Routes/AppointmentRouter');
const familyHistoryRouter  = require('../Router/Routes/FamilyHistoryRouter');


router.use('/api', immunizationRouter);
router.use('/api', patientRouter);
router.use('/api', vitalsRouter);
router.use('/api', allergyRouter);
router.use('/api', conditionsRouter);
router.use('/api', providerRouter);
router.use('/api', medicationAdminstrations);
router.use('/api', medicationRouter);
router.use('/api', appointmentRouter);
router.use('/api',familyHistoryRouter)

module.exports = router;
