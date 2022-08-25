const express = require('express');
const router = express.Router();

const conexion = require('./database/db')



//aca lanzamos nuestro query para GET/MOSTRAR
router.get('/',(req, res)=>{
    

     conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    }) 
})

//aca lanzamos nuestro query para CREATE/AÑADIR
router.get('/create', (req,res)=>{
    res.render('create');
})


module.exports = router;