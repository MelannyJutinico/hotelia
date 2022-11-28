const { Schema, model} = require("moongose");

const userSchema = new Schema({
    _id: Number,
    tipoDoc: String,
    nombre: String,
    apellido: String,
    fnacimiento: Date,
    genero: String,
    email: String,
    telefono: String,
    paisOrigen: String,
    password: String,
    tipoUser: String,
    img: String,
    reservas: [{
        type: Schema.Types.ObjectId,
        ref:'reserva'
    }]
})

module.exports = model("user", userSchema);