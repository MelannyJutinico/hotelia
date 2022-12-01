const habitacion = require('../model/habitacion');

exports.obtener = async (req, res) => {
    try{
        const habitaciones = await habitacion.find();
        res.status(200).json(habitaciones);
    } catch(error){
        res.status(500).json(error);
    }
}
exports.obtenerId = async (req, res) => {
    try {
        const id = req.params.id;
        const habitaciones = await habitacion.findById(id).populate('reserva',{
            "id": 1,
            "fentrada": 1,
            "fsalida": 1,
            "cantidadNoches": 1,
            "freserva": 1,
            "totalReserva": 1
        });
        res.status(200).json(habitaciones);
    } catch (error) {
        res.status(200).json(habitaciones);
    }
}

exports.add = async (req, res) => {
    try {
        const newHabitacion = new habitacion(req.body, req.file);
        if(req.file){
            const{filename} = req.file;
            newHabitacion.setImg(filename);
        }
    } catch (error) {
        
    }
}
