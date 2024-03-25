/* console.log(process.cwd())
console.log(process.pid)
console.log(process.env.HOST)
console.log(process.version)
 */
//console.log(process.argv[2])array
/* console.log(process.argv.slice(2))//
 */

//npm i commander

require('dotenv').config({
    //path:'.env.dev' dependiendo qué variables quiera usar:
    //por defecto: .env
    path:'.env.prod'
})

const {Command} = require('commander')
const program = new Command()

//tercer argumento: por defecto si no llega nada
program
    .option('-d', 'Variable para hacer debug', false)
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo o ambiente de trabajo', 'prod')
    .requiredOption('-u <user>', 'Usuario del sistema', 'No se ha declarado un usuario')
    .option('-l --letter [letters...]', 'Especificar letras')

program.parse()

//console.log(program.opts())

/*en package.json scripts:
 "start:dev": "node index.js -p 8080" modo developer
 "start:prod": "node index.js -p 4001" modo producción*/

 
//===============VARIABLES DE ENTORNO===============
/*Workspace: Develop, Staging y Production
Para cada ambiente, la url, la contraseña, etc va a cambiar el valor de las variables, pero
los nombres van a ser iguales
ARCHIVO ".env" con variables
Después de crear el archivo .env con mis variables:
*/

/* let port = process.env.PORT
console.log(port) */

let port = process.env.HOST

//childprocess - proceso hijo. Aisla un proceso que requiera de muchos recursos
//para que me deje ingresar a otras rutas