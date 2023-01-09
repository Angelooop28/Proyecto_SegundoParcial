const express = require('express') 
var cors = require('cors');
const { dbmongo } = require('../database/db');

class Server{  
    
    constructor(){ 
        this.app= express(); 
        this.port= 5689;

        this.loginPath= '/logincaja'

        this.dbConection();

        this.middlewares();
        this.routes(); 
    }

    middlewares(){


        this.app.use(cors());


        this.app.use( express.json() );


        this.app.use( express.static( 'public' ));
    }

    async dbConection(){
        await dbmongo()
    }

    routes(){

       this.app.use( this.loginPath, require('../routes/logincaja') );
    }

    listen(){ 
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port);
        
        })
    }
}

module.exports=Server;