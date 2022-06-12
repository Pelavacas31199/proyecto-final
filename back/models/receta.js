const mongoose = require('mongoose')

const Schema =mongoose.Schema

const recetaSchema = new Schema({
    titulo: {
        type: String ,
        required:[true,'Titulo obligatorio']
    },
    ingredientes: String,
    instrucciones: String,
    imagen: String
})



module.exports = mongoose.model('Receta',recetaSchema)