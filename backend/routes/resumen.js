const ruta = require('express').Router();

ruta.get('/presentacion',(req, res)=>{
    res.status(200).send("presentacion");
})

module.exports = ruta;
