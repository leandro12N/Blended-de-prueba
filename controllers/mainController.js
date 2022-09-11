const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

let cafes = [
  {
    id: 1,
    cafe: "Espresso",
    precio: "$200",
    ingredentes: "granos,azucar,agua",
    descripcion:
      "askdjbasf fgjdcn asuibac dfañskfnasñkdn añskfnaljscbas c lasjdflajbsdlasjb c clajskahsfvbakscaljc calñsknclab ljacsas"
  },
  {
    id: 2,
    cafe: "Ristretto",
    precio: "$300",
    ingredentes: "polvo,azucar mascabo,agua, canela",
    descripcion:
      "ffffffffffffff fff ffffff ffffff  ffffff ffffff fffffffff"
  },
  {
    id: 3,
    cafe: "Cortado",
    precio: "$400",
    ingredentes: "granos,leche,agua, azucar",
    descripcion:
      "eeeeeeeeeee eee eee eee ee ee ee eeee eeeee ee e e e"
  },
  {
    id: 4,
    cafe: "Americano",
    precio: "$500",
    ingredentes: "lorem input asdasdasdasdasd",
    descripcion:
      "iiiiiiiii i i i i iiiiii iiiiiii ii i i i i iiii"
  },
  {
    id: 5,
    cafe: "cafe con leche",
    precio: "$600",
    ingredentes:
      "capsulas, ibuprofeno 400, tafirol asdasdasdasdasdasdasdasdasd",
      descripcion:
      "oooo ooo o oooo o ooooooo oo oooo oo ooooo oooooo"
  },
];

const controlador = {
  home: function (req, res) {
    res.render("./home.ejs");
  },
  crearCuenta: function (req, res) {
    res.render("./crearCuenta.ejs");
  },
  Producto: function (req, res) {
    let cafeElegido = cafes.find((cafe) => {
      return cafe.id == req.params.id;
    });
    res.render("./Producto.ejs", { eleccion: cafeElegido });
  },

  login: function (req, res) {
    res.render("./login.ejs");
  },

  miCarrito: function (req, res) {
    res.render("./miCarrito.ejs");
  },

  carritoFinal: function (req, res) {
    res.render("./carritoFinal.ejs");
  },

  probandoCocodrilo: function (req, res) {
    res.render("./probandoCocodrilo.ejs");
  },
};

module.exports = controlador;
