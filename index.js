require ('dotenv').config();

const Server = require('./models/server');
const server = new Server();

server.listen();

console.log("Si jala el link perres")