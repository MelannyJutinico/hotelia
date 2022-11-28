const { Router } = require("express");
const rutasReserva = Router();
const ctrRes=require("../controller/reserva.controller");


//rutasReserva.get('/', ctrRes.obtener);
//rutasReserva.get('/:id', ctrRes.obtenerId);
//rutasReserva.post('/', ctrRes.add);
//rutasReserva.put('/:id', ctrRes.edit);

module.exports = rutasReserva;
