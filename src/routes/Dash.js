var express = require("express");
var router = express.Router();

var DashController = require("../controllers/DashController");


router.post("/enviar", function (req, res) {
    DashController.enviar(req, res);
});

router.post("/receber", function (req, res) {
    DashController.receber(req, res);
});



var express = require("express");
var router = express.Router();

module.exports = router;