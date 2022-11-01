const JokerController = require("../controllers/jokes.controllers");
const Joker = require("../models/jokes.model");

module.exports = app => {
    app.get("/api/jokes", JokerController.muestraJokes);
    app.get("/api/jokes/:id", JokerController.muestraUnJoker);
    app.post("/api/jokes/new", JokerController.creaJoker);
    app.put("/api/jokes/update/:id", JokerController.actualizaJoker);
    app.delete("/api/jokes/delete/:id", JokerController.borrarJoker);
};