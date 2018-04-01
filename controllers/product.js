'use strict'

const Product = require('../modelos/product')


function getProduct (req, res){
    let productId = req.params.productId

    Product.findById(productId, (err, product) =>{
        if(err) return res.status(500).send(`Error al realizar la peticion ${err}`)
        if(!product) return res.status(404).send('Producto no existe')

        res.status(200).send(product)
    })
}

function getProducts (req, res){
    Product.find({}, (err, products)=>{
        if(err) return res.status(500).send(`Error al realizar la peticion ${err}`)
        if(!products) return res.status(404).send('Productos no existen')
        res.status(200).send(products)
    })
}

function updateProduct(req, res){
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) =>{
        if(err) res.status(500).send(`Error al actualizar ${err}`)

        res.status(200).send({product: productUpdated})
    })
}

function deleteProdutc(req, res){
    let productId = req.params.productId

    Product.findById(productId, (err, product)=>{
        if(err) res.status(500).send(`Error al borrar el producto ${err}`)

        product.remove(error =>{
            if(error) res.status(500).send(`Error al borrar el producto ${err}`)
            res.status(200).send('El producto fue eliminado')
        })
    })
}

function saveProduct(req, res) {
    let product = new Product
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored)=>{

        if(err) res.status(500).send(`Error al guardar en la base de datos ${err}`)
        res.status(200).send({product: productStored})
    })
}

module.exports = {
    getProduct,
    getProducts, deleteProdutc, updateProduct, saveProduct
}