const fs = require('fs')

fs.promises.readFile('./test.json', 'utf-8')
    .then(res => {
        console.log('Promise: ', res)
    })
    .catch(err => {
        console.log('Error:', err)
    })

fs.promises.writeFile('./test.json', 'Contenido','utf-8')
    .then(res => {
        console.log('Promise: ', res)
    })
    .catch(err => {
        console.log('Error:', err)
})

//ASYNC:
const read = async () => {
    let res = await fs.promises.readFile('./test.json', 'utf-8')
    console.log(res) 
}

read()