const conexion = require('../database/db');

//aca capturaremos los valores del form
exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('./')
        }
    })
}