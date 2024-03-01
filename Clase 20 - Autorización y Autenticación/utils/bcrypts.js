const bcrypt = require('bcrypt')

//password
const createHash = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
    //devuelve true o false
}

module.exports = {
    createHash,
    isValidPassword
}