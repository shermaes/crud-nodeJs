const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/',(req, res)=>{
    
    //aca lanzamos nuestro query
     conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    }) 
})

module.exports = router;