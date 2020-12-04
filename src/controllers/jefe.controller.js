const jefeController={}
const Jefe=require('../models/jefe.model')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


jefeController.crear=async(req,res)=>{
   const{nombre,correo,contrasena}=req.body
   
   const nuevoJefe=new Jefe({
       nombre , correo , contrasena
   })
   
   const correoJefe=await Jefe.findOne({correo:correo})
   if(correoJefe){
       res.json({
           mensaje:'El correo ya existe'
       })
   
    }else{
        nuevoJefe.contrasena=await bcrypt.hash(contrasena,10)
        const token=jwt.sign({_id:nuevoJefe._id},'secreta')
        await nuevoJefe.save()
        res.json({
            mensaje:'Bienvenido',
            id:nuevoJefe.nombre,
            token
        })

    }


}

jefeController.login=async(req,res)=>{
    const{correo,contrasena}=req.body
    const jefe=await Jefe.findOne({correo:correo})

    if(!jefe){
        return res.json({
            mensaje:'Correo incorrecto'
        })
    }
    const match=await bcrypt.compare(contrasena,jefe.contrasena)
    if(match){

        const token=jwt.sign({_id:jefe._id},'secreta')
        res.json({
            mensaje:'Bienvenido',
            id:jefe._id,
            nombre:jefe.nombre,
            token

        })
    }else{
        res.json({
            mensaje:'contrasena incorrecta'
        })
    }
}


module.exports=jefeController