const { body } = require("express-validator");

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
            .withMessage("campo description incompleto")
    ],
    updateProductValidation: [

    ]
}