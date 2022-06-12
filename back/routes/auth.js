const express = require('express')
const router = express.Router()

//Importamos el modelo de las notas que creamos
const Receta = require('../models/receta')

//Agregamos una nueva NOTA usando POST
router.post('/nueva-receta',async(req,res)=>{
    const body = req.body
    try{
        const notaDB=await Receta.create(body)
        res.status(200).json(notaDB)
    }catch (error){
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
})

router.get('/recetas',async(req,res)=>{
    try{
        const notaDB= await Receta.find()
        res.json(notaDB)
    }
    catch(error){
        return res.status(400).json({
            mensaje: "No se encuentra recetas",
            error
        })
    }
})

router.get('/receta/:id',async(req,res)=>{
    const _id =req.params.id
    try{
        const notaDB= await Receta.findOne({_id})
        res.json(notaDB)
    }
    catch(error){
        return res.status(400).json({
            mensaje: "No se encuentra receta con ese ID",
            error
        })
    }
})


module.exports=router