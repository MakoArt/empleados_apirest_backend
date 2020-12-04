const express=require('express')
const app=express()
const morgan=require('morgan')
const cors=require('cors')
const bodyparser=require('body-parser')
require('./database')
require('dotenv').config({path:'.env'})




//cors 



const whitelist=[process.env.FRONTEND_URL];
const corsOptions={
    origin:(origin,callback)=>{
        const existe=whitelist.some(dominio=>dominio===origin);
      
        if(existe){
            callback(null,true)

        }else{
            callback(new Error('no permitido por CORS'));
        }

    }

}

//morgan 
app.use(morgan('dev'))

//bodyparser 

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors(corsOptions))

//routes 

app.use('/jefe',require('./routes/jefe.route'))
app.use('/empleado',require('./routes/empleado.route'))

//host 

const host=process.env.HOST || '0.0.0.0'
const port=process.env.PORT || 5000;

app.listen(port,host,()=>{
 console.log('servidor escuchando por el puerto',app.get('Port'))
})


