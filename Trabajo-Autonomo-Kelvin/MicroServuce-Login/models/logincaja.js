const { Schema, model } = require("mongoose");




const LoginCajaSchema = Schema({

    user: {
        type: String,
        required:[true, 'El campo user es obligatorio']
    },

    password: {
        type: String,
        required:[ true, 'El campo password es obligatorio' ]
    }
})


module.exports= model('Login', LoginCajaSchema)