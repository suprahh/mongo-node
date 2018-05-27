'use strict'

const express = require('express')
const Productcontrollers = require('../controllers/product')
const UserController = require('../controllers/user')
const VentasController = require('../controllers/ventas')
const auth = require('../middelwares/auth')


const api = express.Router()

api.get('/ventas', VentasController.getVentas)
api.get('/product', Productcontrollers.getProducts)
api.get('/product/:productId', Productcontrollers.getProduct)
api.post('/product', auth.isAuth, Productcontrollers.saveProduct)
api.put('/product/:productId', auth.isAuth, Productcontrollers.updateProduct)
api.delete('/product/:productId', auth.isAuth, Productcontrollers.deleteProdutc)
api.post('/signup', UserController.signUp)
api.post('/signin',  UserController.singIn)
api.get('/private', function (req, res) {
    res.status(200).send({message:'Tienes acceso'})
})
api.get('/update', Productcontrollers.updateProducts)
module.exports = api