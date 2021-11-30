var express = require("express");
var bodyParser = require('body-parser')
var router = express.Router();

router.use("/", require("./home"));

module.exports = router;