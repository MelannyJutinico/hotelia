const { Schema, model} = require("mongoose");

const habitacionSchema = new Schema({
    _id: Number,
    nombreHab: String,
    capacidad: Number,
    descripcion: String,
    wifi: String,
    tv: String,
    banio: String,
    cajaFuerte: String,
    nevera: String,
    valorNoche: Number,
    img: String,
    estado: String,
    reservas: [{
        type: Schema.Types.ObjectId,
        ref:'reserva'
    }]
})

module.exports = model("habitacion", habitacionSchema);