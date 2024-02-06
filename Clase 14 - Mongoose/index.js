
/*Clase 13:
Show dbs: muestra las bases de datos
En consola de mongodbs: use crudCoder, si no existe, la crea y la usa
Mongo no muestra las bases vacías así que creamos una conexión: db.createCollection("users")
db.users.drop() elimina esa colección
Insertar documento:
db.users.insertOne({"name":"Lucas", genre: "M", age:45, year: 1998})
db.users.find(): devuelve el documento

Agregar más de uno(array):
db.users.insertMany([{"name":"Lucas", genre: "M", age:45, year: 1998}, {"name":"Lucas", genre: "M", age:45, year: 1998}])

db.users.find() me devuelve todos los objetos que tengo guardados

No necesariamente hay que pasarle los mismos campos a todos los objetos, eso es lo bueno de que sea 
no relacional

db.users.find().pretty()

db.users.find({"genre": "F"}) -> Devuelve los objetos cuyo género es "F"

db.users.estimatedDocumentCount() -> Devuelve la cantidad de documentos
Ahora con filtro: ¿Cuántos hombres hay?
db.users.countDocuments({"genre": "M"})

-----------------------
use crudCoder
show collections
db.users.find()

filtro múltiple: db.users.find({$and : [{"genre":"F"}, {"age":60}] }) dos condiciones

lt menor
lte menor o igual

db.users.find({year}:{$lte: 1985}) => registro cuyo año sea menor o igual a 1985

db.users.find({year}:{$gt: 1985}) => registro cuyo año sea mayor a 1985

db.users.find({year}:{$gte: 1985}) => registro cuyo año sea mayor o igual a 1985

ne: no equal, distinto de. 

Más métodos:
db.users.find().sort({"name": -1}): ORDENO DE FORMA DESCENDENTE
db.users.find().sort({"name": 1}): ORDENO DE FORMA ASCENDENTE

db.users.find().sort({"year": -1}).skip(2): Saltear los dos primeros

db.users.find().sort({"year": -1}).limit(3): Devolver solo 3

ACTUALIZAR:
db.users.updateOne({"_id": ObjectId('65b9773e07c8410c8474021f')}, {$set: {"name": Lucas Mendoza}})
*/



/* Clase 14
Clientes de BD
Cada vez que accedemos a una base de datos para realizar cualquier operación CRUD,
nosotros nos convertimos en clientes de esa base de datos

Podemos ser diferentes tipos de clientes para acceder a la misma base:
4 Clientes:
CLI, GUI, web y app

*/