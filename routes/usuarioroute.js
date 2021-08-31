const express = require("express");
const router = express.Router();
var controller2 = require("../controller/controller2");

router.get('/calc', controller2.openAdc);
router.post('/calc', controller2.calc);


module.exports = router;

