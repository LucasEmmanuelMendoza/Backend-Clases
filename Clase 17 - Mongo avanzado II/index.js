const mongoose = require('mongoose')
const Pizza = require('./pizza')

const connect = async () => {
    return mongoose.connect('link......./nombre_basededatos')
    .then(async() => {
        console.log('Conexión a bd exitosa')

        /*Pizza.insertMany([
            { name: "Pepperoni", size: "small", price: 19,
              quantity: 10, date:"2021-03-13T08:14:30Z" },
            { name: "Pepperoni", size: "medium", price: 20,
              quantity: 20, date :"2021-03-13T09:13:24Z"},
            { name: "Pepperoni", size: "large", price: 21,
              quantity: 30, date :"2021-03-17T09:22:12Z"},
            { name: "Cheese", size: "small", price: 12,
              quantity: 15, date :"2021-03-13T11:21:39.736Z" },
            { name: "Cheese", size: "medium", price: 13,
              quantity:50, date : "2022-01-12T21:23:13.331Z"},
            { name: "Cheese", size: "large", price: 14,
              quantity: 10, date : "2022-01-12T05:08:13Z"},
            { name: "Vegan", size: "small", price: 17,
              quantity: 10, date : "2021-01-13T05:08:13Z"},
            { name: "Vegan", size: "medium", price: 18,
              quantity: 10, date : "2021-01-13T05:10:13Z"}
         ]) */

        
         //Aggregations
        //1)Filtrar las pizzas que tienen size medianas
        let order = Pizza.aggregate([
            {
                $match : {size: 'medium'}
            }
         ])
        //console.log(order)

        //2)Agrupar la data:
        let order2 = Pizza.aggregate([
            {
                $match : {size: 'medium'}
            },
            {
                $group : {_id: '$name', totalQly: {$sum: $quantity}}
            }
            /*Con eso agrupo y muestro todas las pizzas por nombre y cantidad,
            ej rta: {_id: 'Pepperoni', totalQly: 20},{_id: 'Muzzarella', totalQly: 30}             */
            //Hasta ahora tengo dos stages
        ])

        //3)Ordenar por campo
        let order3 = Pizza.aggregate([
            {
                $match : {size: 'medium'}
            },
            {
                $sort: {totalQly: -1}
            }
        ])

        //4)
        let order4 = Pizza.aggregate([
            {
                $match : {size: 'medium'}
            },
            {
                $group : {_id: '$name', totalQly: {$sum: $quantity}}
            },
            {
                $sort: {totalQly: -1}
            },
            {
                $group: {_id: 1, orders: {$push: '$$ROOT'}}
                /*pushea lo que hicieron los stages anteriores hasta el momento
                ver ej en imgs*/
            },
        ])

        //5
        let order5 = Pizza.aggregate([
            {
                $match : {size: 'medium'}
            },
            {
                $group : {_id: '$name', totalQly: {$sum: $quantity}}
            },
            {
                $sort: {totalQly: -1}
            },
            {
                $group: {_id: 1, orders: {$push: '$$ROOT'}}
            },
            {
                $project: {_id: 0, orders:'$orders'}
                //formatea la colección "orders", le saca el id
                //Tenemos que introducirlo sin id como veníamos viendo
                //si no le saco el id simplemente NO lo inserta
            },
        ])
        //al final, voy a tener un objeto llamado "orders" que contiene un array de ordenes adentro
        //con los valores de "cheese": quantity, "peperoni":qtty, etc.....
        
        let order6 = Pizza.aggregate([
            {
                $match : {size: 'medium'}
            },
            {
                $group : {_id: '$name', totalQly: {$sum: $quantity}}
            },
            {
                $sort: {totalQly: -1}
            },
            {
                $group: {_id: 1, orders: {$push: '$$ROOT'}}
            },
            {
                $project: {_id: 0, orders:'$orders'}
            },
            {
                $merge: {'into': 'reports'}
            }//merge crea una colección llamada reports y mete todo lo que hicimos antes
        ])

        //================== PARTE 2 - PAGINATE ==================
        let res = await Pizza.paginate({size:'medium'},{limit: 4, page: 2})
        .then(
            console.log(res)
        ).catch((error) => {
            console.log(error)
        })





    }).catch((error) => {
        console.log(error)
    })
}

connect()