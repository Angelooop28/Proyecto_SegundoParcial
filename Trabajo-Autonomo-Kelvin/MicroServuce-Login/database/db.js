const mongoose = require('mongoose');

const dbmongo = async () =>{
    try {
        await mongoose.connect( '',  {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('Base de Datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}


module.exports={
    dbmongo
}