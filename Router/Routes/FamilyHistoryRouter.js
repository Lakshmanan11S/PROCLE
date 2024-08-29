const express = require('express');
const familyHistoryController = require('../../Controller/FamilyHistoryController');
const router = express.Router();



router.get('/familyhistory',familyHistoryController.familyHistory)


module.exports = router;