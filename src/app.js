const express = require('express');
const conexionDB = require('./db');

const app = express();

require('dotenv').config();

//conexion a la bd
conexionDB();

//configuraciones

app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');