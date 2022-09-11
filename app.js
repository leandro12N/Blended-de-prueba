const express= require("express");
const path= require("path");
const app= express();

app.set('view engine', 'ejs');
app.set("views", "./views")

app.use(express.static(path.join(__dirname,"public")));

app.listen(process.env.PORT || 3080, () => {
    console.log ("servidor 3080 corriendo")
});

app.get("/", function(req,res){
    res.render(path.join(__dirname, "/views/home.ejs"))
});

app.get("/home", function(req,res){
    res.render(path.join(__dirname, "/views/home.ejs"))
});

app.get("/crearCuenta", function(req,res){
    res.render(path.join(__dirname,"/views/crearCuenta.ejs"))
})

app.get("/Producto", function(req,res){
    res.render(path.join(__dirname,"/views/Producto.ejs"))
})

app.get("/login", function(req,res){
    res.render(path.join(__dirname,"/views/login.ejs"))
})

app.get("/miCarrito", function(req,res){
    res.render(path.join(__dirname,"/views/miCarrito.ejs"))
})

app.get("/carritoFinal", function(req,res){
    res.render(path.join(__dirname,"/views/carritoFinal.ejs"))
})
