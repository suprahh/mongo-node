'use strict'
const ventas = require('../modelos/ventas')

function getVentas(req, res){
    ventas.getVentas((err, ventas)=>{
        if(err) res.status(500).send(`Error al borrar el producto ${err}`)
        res.status(200).send(ventas)

    })
}

module.exports = {
    getVentas
}