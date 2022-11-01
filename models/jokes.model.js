const mongoose = require("mongoose");


const EsquemaJoke = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true, versionKey: false})
//timestamps: true -->  crea los campos de cratedAt y updatedAt
//versionKey: false --> elmina el atributo _V

const Joke = mongoose.model("bromas", EsquemaJoke);

module.exports = Joke;