require ('dotenv').config();

const Server = require('./models/server');
const server = new Server();
const {conexion}=require('./db/conexion');

server.listen();



conexion();



