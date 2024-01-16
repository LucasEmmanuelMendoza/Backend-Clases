import { Router } from 'express';
import { ProductManager } from '../src/models/productManager';

//instancio la clase:
const prooductManager = new ProductManager('./products.json')

//CRUD PRODUCTS
const routerProd = Router()

//todos los prods
routerProd.get('/', async(req, res) => {
    const limit = req.query//limito la cantidad
    const limite = parseInt(limit)
    const prods = await prooductManager.getProducts()
    const products = prods.slice(0, limite)
    res.status(200).send(products)

})

//id
routerProd.get('/:id', async(req, res) => {
    const {id} = req.params
    const prods = await prooductManager.getProductById(id)

    if(prod){
        res.status(200).send(prod)
    }else{
        res.status(400).send('Producto no encontrado')
    }
})

routerProd.post('/', async(req, res) => {
    const conf = await prooductManager.addProduct(req.body)
    //mando el body mediante postman en este caso
    if(conf){
        res.status(201).send("Producto creado")
    }else{
        res.status(400).send("Producto ya existente")
    }
})

routerProd.put('/:id', async(req, res) => {
    const {id} = req.params
    const conf = await prooductManager.updateProduct(id, req.body)
    if(conf){
        res.status(200).send("Producto actualizado correctamente")
    }else{
        res.status(404).send("Producto no encontrado")
    }

})

routerProd.delete('/:id', async(req, res) => {
    const {id} = req.params
    const conf = await prooductManager.updateProduct(id)
    if(conf){
        res.status(200).send("Producto eliminado correctamente")
    }else{
        res.status(404).send("Producto no encontrado")
    }
})

export default routerProd