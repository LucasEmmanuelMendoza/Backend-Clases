import passport from 'passport'
import github from 'passport-github2'
import { usuariosModelo } from './userModel.js'

export const initPassport = () => {
    passport.use('github', new github.Strategy(
        {
            clientID:"Iv1.0adf802f1ca465bd",
            clientSecret:"6d9d598be624f105732fb094a73f4065f98e1cbf",
            callbackURL:"http://localhost:8080/api/sessions/callbackGithub"
        },
        async(accessToken,refreshToken, profile, done)=>{
            try{
                //lógica de registro/login
                //console.log(profile)
                let {name, email} = profile._json
                let usuario = await usuariosModelo.findOne({email})
                if(!usuario){
                    usuario = await usuariosModelo.create(
                    {
                        nombre: name, email, github: profile
                    })
                }                
                return done(null, usuario)
            }catch(error){
                return done(error)
            }
        }
    ))
}//fin initPassport

//si usamos session
passport.serializeUser((usuario, done) => {
    done(null, usuario)
})