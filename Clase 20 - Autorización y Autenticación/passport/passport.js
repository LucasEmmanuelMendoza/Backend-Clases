const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const userModel = require('../db/models/user.models')
const { createHash, isValidPassword } = require('../utils/bcrypts')

const initializePassport = () => {
    //dos args: nombre registro, nombre estrategia
    //LocalStrategy recibe un objeto y un callback
    passport.use('register', new LocalStrategy(
        //usernameField: lo que queremos autenticar
        {usernameField:'email', passReqToCallback:true},
        //el email va a ser el username:
        async (req, username, password, done) =>{
            try{
                let userData = req.body
                let user = await userModel.findOne({email: username})
                if(user){
                    //como me estoy registrando, si encuentra un email tiro error
                    done('Error, usuario ya existe', false)
                }
                let userNew = {
                    name: userData.name,
                    email: username,
                    lastName: userData.lastName,
                    password: createHash(userData.password),//encripto contra
                    tel: userData.tel
                }
                let result = await userModel.create(userNew)
                done(null, result)
            }catch(err){
                done('Error al crear el usuario'+err)
            }
        }
    ))

    //serializar: encriptación adicional al usuario
    passport.serializeUser((user, done) => {
        done(null, user._id)//user es lo que devuelve la base de datos
    })
    passport.deserializeUser((id, done) => {
        let user = userModel.findById(id)
        done(null, user)
    })
}

module.exports = initializePassport()
