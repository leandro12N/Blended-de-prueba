const express = require ("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
//Controllers
const userController = require ("../controllers/userControllers");
//Validaciones
const validaciones = require ("../validations/userValidation")
//Multer config

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/imagenes"))
    },
    filename: function (req, file, cb) {
        const newFileName = file.fieldname + Date.now() + '-' + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({ storage: storage,
     fileFilter: (req, file, cb) => {
        const extencionesAceptadas = [".jpg", ".png", ".txt"]

        const info = path.extname(file.originalname)

        const result = extencionesAceptadas.includes(info)

        cb(null, result);

        //  //ingresa un archivo valido
        // cb(null, true)
        // //ingresa un archivo invalido
        // cb(null, false)
}})

//Formulario de reegistro
router.get("/crearCuenta", userController.crearCuenta);
//Proceso del registro
router.post("/crearCuenta",upload.single("image"), validaciones.crearCuentaValidacion ,userController.processCuenta)
//Formulario de Login
router.get("/login", userController.login);
router.post("/login",validaciones.loginValidacion ,userController.processLogin);

module.exports = router;