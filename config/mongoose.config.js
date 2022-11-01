const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dbchistes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log("Algo salio mal con mongo", err));