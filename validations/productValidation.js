const { body } = require("express-validator");
const path = require ("path");
module.exports = {
    createProductValidation: [
        body("name")
            .notEmpty()
            .withMessage("campo name incompleto")
            .isLength({ min: 6 })
            .withMessage("Minimo 6 caracteres"),
        body("price")
            .notEmpty()
            .withMessage("campo price incompleto"),
        body("description")
            .notEmpty()
            .withMessage("campo description incompleto"),
        body("imagen")
        .custom(function(value, {req}){
                return req.file
        }).withMessage("Campo obligatorio imagen")
        .bail()
        .custom(function(value, {req}){
            const extencionesAceptadas = [".jpg", ".png", ".txt"]
            const extension = path.extname(req.file.originalname)
            return extencionesAceptadas.includes(extension)
        }).withMessage("imagen invalida")   
    ],
    updateProductValidation: [

    ]
}