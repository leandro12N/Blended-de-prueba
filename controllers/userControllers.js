const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator")

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
    const data = JSON.parse(jsonData);
    return data
}

function write(data) {
    const stringData = JSON.stringify(data, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), stringData)
}

module.exports = {
    crearCuenta: function (req, res) {
        res.render(path.join(__dirname, "../views/crearCuenta.ejs"));
    },
    processCuenta: function (req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(errors.mapped());
            return res.render("crearCuenta", { elError: errors.mapped(), old: req.body })
        } else {

            const usuarios = findAll();
            let newUser = {
                id: usuarios.length + 1,
                name: req.body.name,
                usuario: req.body.usuario,
                tel: req.body.tel,
                email: req.body.email,
                contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
                contraseña2: bcryptjs.hashSync(req.body.contraseña2, 10)
            }

            usuarios.push(newUser);

            write(usuarios);

            res.redirect("/user/login")
        }
    },
    login: function (req, res) {
        res.render(path.join(__dirname, "../views/login.ejs"));
    },
    processLogin: function (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            res.render("login", { elError: errors.mapped()})
        };

        const usuarios = findAll();

        const userEncontrado = usuarios.find(function(usuario){

        })
    }
};

