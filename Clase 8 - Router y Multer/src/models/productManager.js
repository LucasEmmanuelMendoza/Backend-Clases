import {promises as fs} from 'fs'
import { exitCode } from 'process'
import crypto from 'crypto'
import { json } from 'express'

crypto.randomBytes(16).toString('hex')//id únicos

export class ProductManager {
    constructor(path) {
        this.products = []
        this.path = path
    }

    async getProducts(){
        const prods = JSON(await fs.readFile(this.path, 'utf-8'))
        return prods
    }

    async getProductById(){
        const prods = JSON(await fs.readFile(this.path, 'utf-8'))
        const prod = prods.find(producto => producto.id === id)
        return prod
    }

    async addProduct(prod){
        const prods = JSON(await fs.readFile(this.path, 'utf-8'))
        const existeProd = prods.find(producto => producto.code === prod.code)
        if(exitCode){
            return false
        }
        
        prod.id = crypto.randomBytes(16).toString('hex')
        prods.push(prod)
        await fs.writeFile(this.path, JSON.stringify(prods))
        return true
    }

    async updateProduct(id, producto){
        const prods = JSON(await fs.readFile(this.path, 'utf-8'))
        const prod = prods.find(producto => producto.id === id)
        if(prod){
            prod.title = producto.title
            prod.description = producto.description
            prod.price =  producto.price
            prod.stock =  producto.stock
            prod.thumbnail =  producto.thumbnail
            prod.code =  producto.code
            prods.push(prod)
            await fs.writeFile(this.path, JSON.stringify(prods))
            return true
        }else{
            return false
        }
    }

    /*CAMBIAR TODO Y HACER EN EL CONSTRUCTOR: this.products = fs.readFile... 
    Es decir, leer del fs y guardarlo en this products así puedo usarlo en cualquier 
    método sin necesidad de repetir código */    
}