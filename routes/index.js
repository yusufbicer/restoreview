const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
// 'req' -> object full of information coming in
// 'res' -> data being sent back to the user
router.get('/', storeController.homePage)


module.exports = router;
