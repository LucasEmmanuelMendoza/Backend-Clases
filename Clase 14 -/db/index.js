const mongoose = require('mongoose'); 

module.exports = {
    connect: () => {
        return mongoose.connect("mongodb+srv://mendozalucas001:<contraMongo>@proyectocoder.evpwpta.mongodb.net/")
            .then(()=> {
                console.log("Base de datos conectada")
            })
            .catch((error) => {
                console.log(error)
            })
    }
}