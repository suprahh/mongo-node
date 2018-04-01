'use strict'

const mongose = require('mongoose')
const Schema = mongose.Schema

const ProductSchema = Schema({
    name: String,
    picture: String,
    price: {type: Number, default: 0},
    category:{type:String, enum: ['computers', 'phones', 'accesories']},
    description:String
})

module.exports =  mongose.model('Product', ProductSchema)