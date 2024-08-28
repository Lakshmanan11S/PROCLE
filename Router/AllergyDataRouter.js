const express = require('express');
const allergyController = require('../Controller/AllergyController');
const router = express.Router();


router.post('/allergydata',allergyController.allergyData)




module.exports = router;