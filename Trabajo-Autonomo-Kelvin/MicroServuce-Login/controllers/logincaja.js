const { response, request } = require('express');
const Login = require('../models/logincaja');




const logincajaGet = async (req, res=response) =>{ 
    const login = await Login.find();
    res.status(200).json(login)
}
const logincajaPost = async (req, res=response) =>{ 
    const { user, password } = req.body; 
    const login = new Login({ user, password })
    await login.save();
    
    res.status(200).json(login)
}
const logincajaPut = async (req, res=response) =>{ 
    const {id}= req.params;
    const { ...data } = req.body; 
    const login = await Login.findByIdAndUpdate(id,data, {new: true})
    res.status(200).json(login)
}



const logincajaDelete = async (req= request, res=response) =>{
    const {id}= req.params;

    const login = await Login.deleteOne()

    res.status(200).json()
}

module.exports={
logincajaDelete,
logincajaGet,
logincajaPost,
logincajaPut
}