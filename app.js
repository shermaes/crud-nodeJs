const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('hola');
})

app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});