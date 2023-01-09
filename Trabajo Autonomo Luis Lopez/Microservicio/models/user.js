const { Schema, model } = require("mongoose");




const UserSchema = Schema({

    correo: {
        type: String,
        required:[true, 'El campo correo es obligatorio']
    },

    password: {
        type: String,
        required:[ true, 'El campo password es obligatorio' ]
    }
})


module.exports= model('User', UserSchema)