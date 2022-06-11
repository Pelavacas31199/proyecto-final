import express from 'express'
import morgan from 'morgan'
import corse from 'cors'
import path from 'path'
import mongoose from 'mongoose'

const app = express()

const uri = `mongodb+srv://PFcomputo:PFcomputo@cluster0.bv3a5wm.mongodb.net/PFcomputo?retryWrites=true&w=majority`
const options ={ 
    useNewUrlParser:true,
    useUnifiedTopology: true
}


mongoose.connect(uri,options).then(
    ()=>{
        console.log('Conexión satisfactoria')
    },
    err=>{console.log(err)}
)

app.use(morgan('tiny'))
app.use(corse())
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

app.set('puerto',process.env.PORT || 3000)

app.listen(app.get('puerto'), ()=>{
    console.log('Servidor trabajando en el puerto '+app.get('puerto'))
})