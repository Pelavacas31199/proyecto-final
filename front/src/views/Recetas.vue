<template>
    <div class="container">
        <h1>Recetas</h1>
        <br>
        <router-link to="/crear" class="btn btn-success"
        style="width:100%; margin: 5px;">Agregar nota nueva</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Título</th>
                    <th scope="col">Ingredientes</th>
                    <th scope="col">Intrucciones</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(receta, index) in notas" :key="index">
                    <th scope="row">{{receta._id}}</th>
                    <td>{{receta.titulo}}</td>
                    <td>{{receta.ingredientes}}</td>
                    <td>{{receta.instrucciones}}</td>
                    <td>{{receta.imagen}}</td>
                    <td>
                        <b-button class="btn-warning btn-sm mx-2"  
                        @click="verReceta(receta._id)">Ver</b-button>
                    </td>
                </tr>
            </tbody>
        </table>
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