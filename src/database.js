const mongoose=require('mongoose')
require('dotenv').config({path:'.env'})




mongoose.connect(process.env.DB_URL,{
    
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>console.log('base de datos conectada'))
.catch(error=>console.log(error))


module.exports=mongoose