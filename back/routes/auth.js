import express from "express";
const router = express.Router()

//Importamos el modelo de las notas que creamos
import Receta from "../models/receta";

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

/*router.get('/nota/:id',async(req,res)=>{
    const _id =req.params.id
    try{
        const notaDB= await Nota.findOne({_id})
        res.json(notaDB)
    }
    catch(error){
        return res.status(400).json({
            mensaje: "No se encuentra nota con ese ID",
            error
        })
    }
})

router.get('/nota',async(req,res)=>{
    try{
        const notaDB= await Nota.find()
        res.json(notaDB)
    }
    catch(error){
        return res.status(400).json({
            mensaje: "No se encuentra nota con ese ID",
            error
        })
    }
})


*/
module.exports=router