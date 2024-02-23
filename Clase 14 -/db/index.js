const mongoose = require('mongoose'); 
const Cart = require('./models/cart.model')

module.exports = {
    connect: () => {
        return mongoose.connect("mongodb+srv://lucas:123@clustermendoza.0fsgvex.mongodb.net/")
            .then(async ()=> {
                console.log("Base de datos conectada")

                Product.create({
                    name: 'Televisor',
                    price: 21312,
                    category: 'Hogar',
                    stock: 10
                })

                Cart.create({
                    data: '15/02/2024'
                })

                let cart1 = await Cart.findOne({_id: 'asdasda123123asdas123GHdsad2'}).populate('products.product')
                //esto es más rápido que un find normal porque busca directamente en los parámetros que le pasamos y que seteamos en el model
                cart1.products.push({product: 'prodId123213'})

            })


            .catch((error) => {
                console.log(error)
            })
    }
}