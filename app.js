//Modulos
const express= require("express");
const path= require("path");
const methodOverride = require("method-override")
const app= express();
//Modulos creados por mi
const productRouter = require ("./routers/ProductRouter")
const mainRouter = require('./routers/mainRouter')


//Configuraciones: Template Engine - MethodOverride - Urlencoded
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"./views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//Routers
app.use("/", mainRouter);
app.use("/products", productRouter)


app.listen(process.env.PORT || 3030, () => {
    console.log ("servidor corriendo")
});



