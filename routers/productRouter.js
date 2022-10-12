const express = require('express');
const router = express.Router();
const productController = require("../controllers/productControllers");
const multer = require("multer");
const path = require("path");
const {body} = require("express-validator");

const {createProductValidation} = require("../validations/productValidation")
const {updateProductValidation} = require("../validations/productValidation")

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

router.get("/list", productController.list);
router.get("/detail/:id", productController.detail);
router.get("/create", productController.create);
router.post("/create", upload.single("imagen"),createProductValidation,productController.store);
router.get("/edit/:id", productController.edit);
router.put("/edit/:id",upload.single("imagen"),updateProductValidation ,productController.update);
router.delete("/delete/:id", productController.destroy)

module.exports = router;