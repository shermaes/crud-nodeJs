const express = require('express');
const app = express();

//motor de plantilla
app.set('view engine','ejs')

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});