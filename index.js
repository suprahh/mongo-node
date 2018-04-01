'use strict'

const mongoose = require('mongoose')
const app = require('./App')
const config = require('./config')



mongoose.connect(config.db)
    .then(() => app.listen(config.port, () => console.log(`Api REST running on http://localhost:${config.port}`)))
    .catch((err) => {
        if(err) console.error( `Error al conectar a la base datos ${err}`)
    })﻿


