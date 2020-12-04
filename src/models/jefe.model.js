const mongoose=require('mongoose')
const {Schema}=mongoose

const jefeSchema=new Schema({

    nombre:String,
    correo:String,
    contrasena:String
})

module.exports=mongoose.model('jefes',jefeSchema)

