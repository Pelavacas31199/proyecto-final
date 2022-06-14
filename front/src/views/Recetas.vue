<template>
    <div class="container">
        <h1>Recetas</h1>
        <br>
        <router-link to="/crear" class="btn btn-success"
        style="width:100%; margin: 5px;">Agregar Receta Nueva</router-link>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="(receta, index) in notas" :key="index">
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img v-if="receta.imagen" class="mr-3" :src="receta.imagen" :alt="receta.imagen" width="120">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{receta.titulo}}</h5>
                            <p class="card-text">{{receta.ingredientes}}</p>
                            <p class="card-text"><small class="text-muted">{{receta.instrucciones}}</small></p>
                            <b-button class="btn-success btn-sm mx-2"  @click="verReceta(receta._id)">Ver receta</b-button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data (){
        return{
            notas: []
        }
    },
    methods: {
        mostrarNotas(){
            axios.get('recetas')
            .then((res)=>{
                //console.log(res)
                this.notas=res.data
                console.log(this.notas)
            })
            .catch((e)=>{
                console.log('error: '+e)
            })
        },
        verReceta(id){
            this.$router.push({
                name: "Ver",
                params:{
                    id,
                }
            })
        }
    },
    created() {
        this.mostrarNotas()
    },
}
</script>
<style>
    h5{
        color: black;
        text-align: left;
    }
    h3{
        color: black;
    }
    hr{
        color: black;
    }
</style>