const express = require('express')

const {Router} = express
const route = new Router()
const Products = require('../db/models/product.model')
const e = require('express')
const Product = require('../db/models/product.model')

route.get('/allProducts', async(req, res) => {
    try{
        let resp = await Products.find()
        resp.send({
            msg:'Productos encontrados',
            data: resp
        })
    }catch(error){
        console.log(error)
    }
})

route.post('/createProd', async(req, res) => {
    try{
        await Products.create(req.body)    
        res.status(201).send({
            msg: 'Producto creado',
            data: req.body
        })    
    }catch(error){
        console.log(error)
    }
})

module.exports = route