//Modulos
const express= require("express");
const app= express();
const path= require("path");
const methodOverride = require("method-override");

const mainRoutes = require('./routers/index');
const productRoutes = require('./routers/productRouter');
const userRouter = require ("./routers/userRouter")

//Configuracion 
// Template Engine (Motor de plantillas - EJS)
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routers
app.use("/", mainRoutes);
app.use("/products", productRoutes);
app.use("/user", userRouter)


app.listen(process.env.PORT || 3090, () => {
    console.log ("servidor corriendo")
});



