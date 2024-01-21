const socket = io()

//escuchamos los eventos con sus nombrs de index.js de routes
socket.on('mensaje', (data)=>{
    console.log(data)
    socket.emit('mensaje2', 'Hola servidor, muchas gracias')
})

const addMessages = () => {
    const msj = {
        nombre: document.getElementById('nombre').value,
        text: document.getElementById('texto').value
    }
    console.log(msj)

    //envio mensaje con emit
    socket.emit('messajenuevo', msj)
    //ahora voy al servidor y lo recibo

    return false
}

const render = (data) => {
    data.map(elem => {
        return {
            `<div>
                <strong> ${elem.nombre}</strong>
                <em> ${elem.text}</em>`
        }
    })
}