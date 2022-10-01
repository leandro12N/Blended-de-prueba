const fs = require("fs");
const path = require("path");

function findAll() {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../data/productos.json")
  );
  const data = JSON.parse(jsonData);
  return data;
}

function create (data){
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/productos.json"), dataString);
}
const controllers = {
  list: function (req, res) {
    const data = findAll();
    console.log(data);
    res.render("menu-productos", { productos: data });
  },
  detail: function (req, res) {
    const data = findAll();
    const cafeEncontrado = data.find(function (cafe) {
      return cafe.id == req.params.id;
    });

    res.render("detalle-producto", { cafe: cafeEncontrado });
  },
  create: function (req, res) {
    res.render("agregar-productos");
  },
  store: function (req, res) {
    const data = findAll();
    const newProduct = {
      id: data.length + 1,  //Del largo de mi array osea la cantidad de element le sumo 1 para que no pide los demas elementos
      name: req.body.name,
      price: Number(req.body.price), //Number transforma el string que me llega en numero
      description: req.body.description,
    };

    data.push(newProduct);

    create(data);

    res.redirect("/products/list");
  },
};

module.exports = controllers;
