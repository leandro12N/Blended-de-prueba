//Modulos
const express= require("express");
const path= require("path");
const app= express();
const mainRoutes = require('./routers/index');



//Configuracion 
// Template Engine (Motor de plantillas - EJS)
app.set('view engine', 'ejs');
app.set("views", "./views")
app.use(express.static("public"))

//Routers
app.use("/", mainRoutes);


app.listen(process.env.PORT || 3090, () => {
    console.log ("servidor corriendo")
});



