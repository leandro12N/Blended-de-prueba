const express = require("express");

const controlador = require("../controllers/mainController")

const router = express.Router();

/*RENDER DE VISTAS DEL PROYECTO*/

router.get("/", controlador.home)


module.exports = router;