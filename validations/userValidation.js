const { body } = require ("express-validator");
const fs = require("fs");
const path = require("path");

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
    const data = JSON.parse(jsonData);
    return data
}

module.exports = {
    crearCuentaValidacion: [
        body("name")
            .notEmpty()
            .withMessage("campo name incompleto"),
        body("usuario")
            .notEmpty()
            .withMessage("campo usuario incompleto"),
        body("tel")
            .notEmpty()
            .withMessage("campo tel incompleto"),
        body("email")
            .notEmpty()
            .withMessage("campo email incompleto")
            .bail()
            .isEmail()
            .withMessage("formato email invalido")
            .custom(function (value, { req }){
                const usuarios = findAll();

                const emailEncontrado = usuarios.find(function(usuario){
                    return usuario.email == value
                })
                if(emailEncontrado){
                    return false
                }else{
                    return true
                }
            }).withMessage("email ya utilizado"),
        body("contraseña")
            .notEmpty()
            .withMessage("completar contraseña"),
        body("contraseña2")
            .notEmpty()
            .withMessage("confirmar contraseña"),
    ],
    loginValidacion: [
        body("email")
            .notEmpty()
            .withMessage("campo email incompleto")
            .bail()
            .isEmail().withMessage("formato email invalido"),
        body("contraseña")
            .notEmpty()
            .withMessage("completar contraseña")

    ]
}