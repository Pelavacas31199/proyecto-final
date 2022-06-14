<template>
    <div class="container">
        <h1>Crear receta</h1>
        <form class="formPost" @submit.prevent="agregarReceta(receta)">
            <label for="exampleFormControlInput1" class="form-label">Título</label>
            <input type="text" 
            class="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Escriba el título de la receta"
            v-model="receta.titulo"
            >
            <br>
            <label for="exampleFormControlInput1" class="form-label">Ingredientes</label>
            <input type="text" 
            class="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Escriba los ingredientes de la receta"
            v-model="receta.ingredientes"
            >
            <br>
            <label for="exampleFormControlInput1" class="form-label">Instrucciones de la receta</label>
            <textarea class="form-control" aria-label="With textarea" v-model="receta.instrucciones"></textarea>
            <br>
            <label for="exampleFormControlInput1" class="form-label">Link de la imagen</label>
            <input type="text" 
            class="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Imagen"
            v-model="receta.imagen"
            >
            <br>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <b-button class="btn btn-block btn-success elements" type="submit">Agregar</b-button>
                <router-link to="/recetas" class="btn btn-block btn-danger elements">Cancelar</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            receta:{},
            recetas:[]
        }
    },   
    methods: {
        agregarReceta(item){
            axios.post('nueva-receta',item).then(res=>{
                this.recetas.unshift(res.data)
                window.location.href="/recetas"
            })
            .catch(e=>{
                console.log('error'+e)
            })
        },
        regresar(){
            window.location.href="/recetas"
        }
    }
}
</script>

<style scoped>
.formPost{
    width:100%;
    padding:3%;
}
.elements{
    width: 100%;
    margin: 10px;
    color:rgb(0, 0, 0);
}
label{
    color: #000000;
    text-align: left;
}
div{
    text-align: left;
    align-items: center;
}
h1{
    text-align: center;
}
</style>