<template>
    
    <div class="container">
        <h1>Receta</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Ingredientes</th>
                    <th scope="col">Instrucciones</th>
                    <th scope="col">Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{verReceta.titulo}}</td>
                    <td>{{verReceta.ingredientes}}</td>
                    <td>{{verReceta.instrucciones}}</td>
                    <td><img v-if="verReceta.imagen" class="mr-3" :src="verReceta.imagen" :alt="verReceta.imagen"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            verReceta:{}
        }
    },
    mounted(){
        console.log(this.idReceta)
        this.loadReceta(this.idReceta)
    },
    methods: {
        loadReceta(id){
            //alert(this.$route.params.id)
            let idReceta=this.$route.params.id
            axios.get(`receta/${idReceta}`)
            .then(res=>{
                this.verReceta=res.data
                console.log(this.verReceta)
            })
            .catch(e=>{
                console.log('error '+e)
            })
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
div{
    justify-content: left;
    align-items: left;
}
</style>