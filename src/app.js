const express = require('express');
const conexionDB = require('./db');
const rutasHab = require('./routes/habitacion.route');
const rutasReserva = require('./routes/reserva.route');
const rutasUser = require('./routes/user.route');

const app = express();

require('dotenv').config();

//conexion a la bd
conexionDB();

//configuraciones

app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');

//midleware
app.use(express.json());

//llamado de rutas
app.use(express.static('public'));
app.use('/public',express.static('public/upload'));

app.use('/habitaciones', rutasHab);
app.use('/reserva', rutasReserva);
app.use('/user', rutasUser);


module.exports = app;