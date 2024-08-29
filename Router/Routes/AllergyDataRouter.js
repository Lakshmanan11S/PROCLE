const express = require('express');
const allergyController = require('../../Controller/AllergyController');
const router = express.Router();


router.get('/allergydata',allergyController.allergyData)




module.exports = router;