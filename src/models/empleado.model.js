const mongoose=require('mongoose')
const {Schema}=mongoose


const empleadosSchema=new Schema({
    nombre:String,
    apellidos:String,
    identificacion:String,
    puesto:String,
    tcontrato:String,
    jefe:String
})

module.exports=mongoose.model('empleados',empleadosSchema)