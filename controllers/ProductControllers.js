const express = require("express");
const path = require('path');

const controladores = {
    list: (req, res) => {
        res.render("listaProductos")
    }
}

module.exports = controladores;