'use strict'

const mysql = require('mysql')
const config = require('../config')
console.log(config.dbMysql)
const connection = mysql.createConnection(config.dbMysql)

let ventasModel = {}
ventasModel.getVentas = (callback) =>{
    if (connection){
        connection.query('select * from cencosud_foto.depto',
            (err, rows) =>{
            if(err) throw err
                else callback(null, rows)
            })
    }
}

module.exports = ventasModel;
