const {Schema, model } = require("mongoose");
const habitacion = require("./habitacion");

const reservaSchema = new Schema({
    fentrada: Date,
    fsalida: Date,
    cantidadNoches: Number,
    freserva: Date,
    totalReserva: Number,

    user: [{
        type: Schema.Types.Number,
        ref: 'user'
    }],
    
    habitaciones: [{
        type: Schema.Types.Number,
        ref: 'habitacion'
    }]
})

module.exports = model("reserva", habitacionSchema);