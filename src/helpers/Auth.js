const Auth={}
const jwt=require('jsonwebtoken')

Auth.verificartoken=(req,res,next)=>{
   if(!req.headers.autorizacion){
       return res.json({
           mensaje:'no estas autorizado'
       })
   }
   const token=req.headers.autorizacion
   if(token==='null'){
       return res.json({
           mensaje:'no estas autorizado'
       })
   }
   next()
}

module.exports=Auth