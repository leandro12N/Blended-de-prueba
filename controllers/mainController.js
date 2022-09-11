const path = require("path");

const controlador = {
  home: function (req, res) {
    res.render(path.join(__dirname, "../views/home.ejs"));
  },
  crearCuenta: function (req, res) {
    res.render(path.join(__dirname, "../views/crearCuenta.ejs"));
  },
  Producto: function (req, res) {
    res.render(path.join(__dirname, "../views/Producto.ejs"));
  },

  login: function (req, res) {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },

  miCarrito: function (req, res) {
    res.render(path.join(__dirname, "../views/miCarrito.ejs"));
  },

  carritoFinal: function (req, res) {
    res.render(path.join(__dirname, "../views/carritoFinal.ejs"));
  },
};

module.exports = controlador;
