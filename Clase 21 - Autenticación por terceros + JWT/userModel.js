import { type } from "os"
export const usuariosModelo = mongoose.model('usuarios', new mongoose.Schema(
    {
        nombre:String,
        email:{
            type:String, unique:true
        },
        apellido: String,
        password: String,
        
    },
    {
        timetamps: true,
        stricT:false
    }
))

