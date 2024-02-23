const mongoose = require('mongoose')
//import mongoPaginate

const PizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true,
        enum: ['S', 'M', 'XL']
    },
    quantity: {
        type: Number
    },
    date: Date
})

PizzaSchema.plugin(mongoPaginate)

const Pizza = mongoose.model('Pizza', PizzaSchema)

module.exports = Pizza