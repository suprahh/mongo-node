'use strict'

const express = require('express')
const Productcontrollers = require('../controllers/product')
const auth = require('../middelwares/auth')
const UserController = require('../controllers/user')

const api = express.Router()


api.get('/product', auth.isAuth, Productcontrollers.getProducts)
api.get('/product/:productId', Productcontrollers.getProduct)
api.post('/product', auth.isAuth, Productcontrollers.saveProduct)
api.put('/product/:productId', auth.isAuth, Productcontrollers.updateProduct)
api.delete('/product/:productId', auth.isAuth, Productcontrollers.deleteProdutc)
api.post('/signup', UserController.signUp)
api.post('/signin',  UserController.singIn)
api.get('/private', auth.isAuth, function (req, res) {
    res.status(200).send({message:'Tienes acceso'})
})
module.exports = api