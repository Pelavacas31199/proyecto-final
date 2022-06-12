const express = require('express')
const mongoose = require('mongoose')
const corse= require('cors')
const path = require('path')
const morgan= require('morgan')

const app = express()

const uri = `mongodb+srv://PFcomputo:PFcomputo@cluster0.bv3a5wm.mongodb.net/PFcomputo?retryWrites=true&w=majority`
const options ={ 
    useNewUrlParser:true,
    useUnifiedTopology: true
}

const corsOptions={
    origin:"*",
    optionsSuccessStatus:200
}

mongoose.connect(uri,options).then(
    ()=>{
        console.log('Conexión satisfactoria')
    },
    err=>{console.log(err)}
)

app.use(morgan('tiny'))
app.use(corse(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api',require('./routes/auth'))
//app.use('/users',require('./routes/users'))

//Rutas del back
app.get('/',(req,res)=>{
    res.json({
        estado: true,
        mensaje: 'Funciona'
    })
})

//Middleware para Vue router mode history
const history=require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log(`Servidor trabajando en el puerto: ${PORT}`)
})