const express = require("express");
const router = express.Router();
var opeController = require("../controller/controller2");

router.get('/calc', opeController.calc);
router.post('/calc', opeController.openAdc);


module.exports = router;

