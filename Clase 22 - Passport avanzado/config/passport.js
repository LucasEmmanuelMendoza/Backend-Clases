const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')

const initializePassport = () => {
    passport.use('jwt', new JwtStrategy({
        //desde donde voy a extraer la cookie
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret'
    }, async(jwt_payload, done)=>{
        try{
            return done(null, jwt_payload)
        }catch(error){
            return done('Error en JWT passport', error)
        }
    }))
}

const cookieExtractor = function(req){
    const token = null;
    if(req && req.cookies){
        token = req.cookies['cookieToken'];
    }
    return token;
};

//si hay user, hay un jwt creado
const authorization = () => {
    return (req, res, next) => {
        if(!req.user) return res.status(401).send({error: 'Unauthorized'})
        if(req.user.role != 'admin') return res.status(403).send({error:'No permission'}) 
        next()
    }
}

module.exports = { initializePassport }