const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    products: {
        type: [
            {//relaciono el array con el model de products
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'
                    //ref: nombre de la colección del prod model, el que está enter comillas: const Product = mongoose.model('Product', ProductSchema)
                }
            }
        ]
    }
})

//middleware
//c v que se haga un findone al modelo de carts se va a ejecutar el populate:

CartSchema.pre('findOne', () => {
    this.populate('products.product')
})

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart