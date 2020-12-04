empleadoController={}
const Empleado=require('../models/empleado.model')

empleadoController.crear=async(req,res)=>{
    const{nombre,apellidos,identificacion,puesto,tcontrato,jefe}=req.body
    
     const nuevoEmpleado= new Empleado({
         nombre,apellidos,identificacion,puesto,tcontrato,jefe
     })

     const respuesta=await nuevoEmpleado.save()
     res.json({
         mensaje:'Empleado creado',
         respuesta
     })
     


}

      empleadoController.listar=async(req,res)=>{

       const respuesta=await Empleado.find()
       res.json(respuesta)
    
    }

     empleadoController.listarId=async(req,res)=>{
         const id=req.params.id
         const respuesta=await Empleado.findBy({_id:id})
         res.json(respuesta)
     }

     empleadoController.empleadosJefe=async(req,res)=>{
         const id=req.params.id 
         const respuesta=await Empleado.find({jefe:id})
         res.json(respuesta)
     }
     empleadoController.eliminar=async(req,res)=>{
         const id=req.params.id 
         await Empleado.findByIdAndDelete({_id:id},req.body)
         res.json({
             mensaje:'Empleado eliminado'
         })
     }
     empleadoController.actualizar=async(req,res)=>{
         const  id=req.params.id
         await Empleado.findByIdAndUpdate({_id:id},req.body)
         res.json({
             mensaje:'Empleado actualizado'
         })
     }

     empleadoController.buscarEmpleado=async(req,res)=>{
         const nombre=req.params.nombre
         const respuesta=await Empleado.findOne({nombre:{$regex:".*"+nombre+".*"}})
         res.json(respuesta)
     }






module.exports=empleadoController
