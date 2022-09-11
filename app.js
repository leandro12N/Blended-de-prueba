const express= require("express");
const path= require("path");
const app= express();
const mainroutes = require ("./routers/main.js")

app.set('view engine', 'ejs');
app.set("views", "./views")

app.use(express.static(path.join(__dirname,"public")));

app.listen(process.env.PORT || 3080, () => {
    console.log ("servidor 3080 corriendo")
});

app.use("/", mainroutes);

// app.use(usuarios);

