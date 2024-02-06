const express = require('express')
const DataBase = require('../db/index')
const app = express()
const productsRoute = require('../routes/product.route.js')

app.use(express.json())

DataBase.connect()

app.use('/prod', productsRoute)

app.listen(8080, () => {
    console.log("Server running on port 8080")
})