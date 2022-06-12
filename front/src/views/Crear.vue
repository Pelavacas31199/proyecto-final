<template>
    <div class="container">
        <form class="formPost" @submit.prevent="agregarReceta(receta)">
            <h3 class="text-center">Agregar Nota</h3>
            <input type="text" 
            placeholder="Ingresa tu nombre"
            class="form-control-my-2 elements"
            v-model="receta.titulo"
            >
            <br>
            <input type="text" 
            placeholder="Ingresa la descripción"
            class="form-control-my-2 elements"
            v-model="receta.ingredientes"
            >
            <input type="text" 
            placeholder="Ingresa la descripción"
            class="form-control-my-2 elements"
            v-model="receta.instrucciones"
            >
            <input type="text" 
            placeholder="Ingresa la descripción"
            class="form-control-my-2 elements"
            v-model="receta.imagen"
            >
            <br>
            <b-button
            class="btn btn-block btn-success elements"
            type="submit"
            >Agregar</b-button>
            <router-link to="/notas"
            class="btn btn-block btn-warning elements"
            >Cancelar</router-link>
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
    color:blue;
}
</style>