const Joker = require("../models/jokes.model");

//Regresa lista de objetos/documentos Jokers
module.exports.muestraJokes = (req, res) => {
    Joker.find()
        .then(todosJokes => res.json({bromas: todosJokes}))
        .catch(err => res.json({message: "Algo salio mal", error: err}))
};

//Me regresa solo un documento de estudiante en base al ID que mandemos en la URL
module.exports.muestraUnJoker = (req, res) => {
    Joker.findOne({_id: req.params.id})
        .then(unJoker => res.json({bromas: unJoker}))
        .catch(err => res.json({message: "Algo salio mal", error: err}))
};

//Me crea un nuevo estudiante en base al al que reciba en body
module.exports.creaJoker = (req, res) => {
    Joker.create(req.body)
        .then(nuevoJoker => res.json ({bromas: nuevoJoker}))
        .catch(err => res.json({message: "Algo salio mal", error: err}))
};

//Me actualiza en base a lo que recibe en body  y lo que recibe en id URL
module.exports.actualizaJoker = (req, res) => {
    Joker.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(bromaActualizado => res.json ({bromas: bromaActualizado}))
        .catch(err => res.json({message: "Algo salio mal", error: err}))
};

//Borramos un estudiante en base al ID que tenemos en la URL
module.exports.borrarJoker = (req, res) => {
    Joker.deleteOne({_id: req.params.id})
    .then(result => res.json ({result: result}))
    .catch(err => res.json({message: "Algo salio mal", error: err}))

};