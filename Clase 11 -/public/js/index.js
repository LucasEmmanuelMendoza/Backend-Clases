const socket = io()

socket.on('message-all', (data) => {
    console.log(data)
    render(data)
})

const render = (data) => {
    //data = array de mensajes
    const html = data.map(elem => {
        return(
            `<div>
                <strong>${elem.author}</strong> dice <em>${elem.text}</em>
            </div>
            `
        )
    }).join(' ')
    
    document.getElementById('caja').innerHTML = html
}

const addMessage = () => {
    const msg = {
        author: document.getElementById('name').value,
        text: document.getElementById('name').value
    }
    socket.emit('new-message', msg)
    return false
}