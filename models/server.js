const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;

        this.middleawares();
    }

    middleawares(){
        this.app.use( express.static('public'))
    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log (`Link del servidor http://localhost:${this.port}`)
        })
    }

}

module.exports = Server;