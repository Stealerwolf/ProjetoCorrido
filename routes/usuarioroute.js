const express = require("express");
const router = express.Router();
var opeController = require("../controller/controller2");

router.get('/opera', opeController.adc);
router.post('/opera', opeController.openAdc);


module.exports = router;

