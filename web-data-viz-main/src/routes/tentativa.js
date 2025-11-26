var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/registrarTentativa", function (req, res) {
    tentativaController.registrarTentativa(req, res);
})

module.exports = router;