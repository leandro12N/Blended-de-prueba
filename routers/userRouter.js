const express = require ("express");
const router = express.Router();

const userController = require ("../controllers/userControllers");
const validaciones = require ("../validations/userValidation")

router.get("/crearCuenta", userController.crearCuenta);
router.post("/crearCuenta", validaciones.crearCuentaValidacion ,userController.processCuenta)

router.get("/login", userController.login);
router.post("/login",validaciones.loginValidacion ,userController.processLogin);
router.post("/logout", userController.logout)

module.exports = router;