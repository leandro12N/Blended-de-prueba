const express = require("express");

const controlador = require("../controllers/mainController")

const router = express.Router();

/*RENDER DE VISTAS DEL PROYECTO*/

router.get("/", controlador.home)

router.get("/crearCuenta", controlador.crearCuenta)

router.get("/Producto", controlador.Producto)

router.get("/login", controlador.login)

router.get("/miCarrito", controlador.miCarrito)

router.get("/carritoFinal", controlador.carritoFinal)

module.exports = router;