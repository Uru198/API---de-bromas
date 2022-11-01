const express = require('express');
const app = express();

//Inicializamos DB
require('./config/mongoose.config');

//para usar json y obtener datos de la URL 
app.use(express.json(), express.urlencoded({extended: true}));

//Importar Rutas
const misRutas = require("./routes/jokes.routes");
misRutas(app);

//Ejecutamos server

app.listen(8000, () => {
    console.log("servidor esta corriendo");
});