const { Router } = require('express');

const { 
logincajaDelete,
logincajaGet,
logincajaPost,
logincajaPut

} = require('../controllers/logincaja');




const router = Router(); 


router.get('/', logincajaGet )

router.post('/', logincajaPost )

router.put('/:id', logincajaPut )

router.delete('/:id', logincajaDelete )


module.exports= router;