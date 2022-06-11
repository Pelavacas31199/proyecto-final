import express from 'express'
import morgan from 'morgan'
import corse from 'cors'
import path from 'path'
import mongoose from 'mongoose'

const app = express()

/*const url = 'mongodb://localhost:27017/myApp'
const options ={ 
    useNewUrlParser:true,
    useUnifiedTopology: true
}


mongoose.connect(url,options).then(
    ()=>{
        console.log('Conectado a DB')
    },
    err=>{console.log(err)}
)*/

app.use(morgan('tiny'))
app.use(corse())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use('/api',require('./routes/nota'))
//app.use('/users',require('./routes/users'))

//Rutas del back
app.get('/',(req,res)=>{
    res.send('Hola mundo')
})

//Middleware para Vue router mode history
const history=require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname,'public')))

app.set('puerto',process.env.PORT || 3000)

app.listen(app.get('puerto'), ()=>{
    console.log('Ejemplo del servidor puerto '+app.get('puerto'))
})