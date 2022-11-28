const habitacion = require('../model/habitacion');

exports.obtener = async (req, res) => {
    try{
        const habitaciones = await habitacion.find();
        res.status(200).json(habitaciones);
    } catch(error){
        res.status(500).json(error);
    }
}
