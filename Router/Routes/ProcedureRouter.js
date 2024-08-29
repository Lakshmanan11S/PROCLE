const express = require('express');
const providerController = require('../../Controller/ProcedureController');
const router = express.Router();



router.get('/procedure',providerController.procedure)


module.exports = router;