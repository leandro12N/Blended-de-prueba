const express = require('express');
const mainController = require('../controllers/mainController.js')

const router = express.Router();


    // Vistas Principales

router.get("/", mainController.home);
router.get("/crearCuenta", mainController.crearCuenta);
router.get("/login", mainController.login);
router.get("/carritoFinal", mainController.carritoFinal);
router.get("/editar-productos", mainController.editar)

module.exports = router;
