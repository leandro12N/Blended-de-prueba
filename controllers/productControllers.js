const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator")

function findAll() {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../data/productos.json")
  );
  const data = JSON.parse(jsonData);
  return data;
}

function writeFile(data) {
  const dataString = JSON.stringify(data, null, 4);
  fs.writeFileSync(path.join(__dirname, "../data/productos.json"), dataString);
}
const controllers = {
  list: function (req, res) {
    const data = findAll();
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
    if (req.file) {
      console.log("tengo la info");
    } else {
      console.log("no tengo la info");
    }
    const errors = validationResult(req);
    console.log(errors);

    if (errors.isEmpty) {
      //errores
      res.render("agregar-productos", {
        errors: errors.errors,
        errors2: errors.mapped(),
        old: req.body
      });
    } else {
      const data = findAll();

      const newProduct = {
        id: data.length + 1,  //Del largo de mi array osea la cantidad de element le sumo 1 para que no pide los demas elementos
        name: req.body.name,
        price: Number(req.body.price), //Number transforma el string que me llega en numero
        description: req.body.description,
        image: req.file.filename
      };

      data.push(newProduct);

      writeFile(data);

      res.redirect("/products/list");
    }
  },
  edit: function (req, res) {
    const data = findAll();
    const cafeEncontrado = data.find(function (cafe) {
      return cafe.id == req.params.id
    })
    res.render("editar-productos", { cafe: cafeEncontrado })
  },
  update: function (req, res) {
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
      res.render("editar-productos", { error: errors.array()})
    }else{
      const data = findAll();
      const cafeEncontrado = data.find(function (cafe) {
        return cafe.id == req.params.id
      })
      
      cafeEncontrado.name = req.body.name;
      cafeEncontrado.price = req.body.price;
      cafeEncontrado.description = req.body.description;
      cafeEncontrado.image = req.file ? req.file.filename : cafeEncontrado.image;
      
      writeFile(data);
      
      res.redirect("/products/list");
    }
    },
  destroy: function (req, res) {
    const data = findAll();
    const datoEncontrado = data.findIndex(function (cafe) {
      return cafe.id == req.params.id
    })

    data.splice(datoEncontrado, 1);

    writeFile(data);

    res.redirect("/products/list");
  }
};

module.exports = controllers;
