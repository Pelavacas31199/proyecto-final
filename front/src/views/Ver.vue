<template>
    <div class="container">
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
                <tr >
                    <th scope="row">{{verReceta._id}}</th>
                    <td>{{verReceta.titulo}}</td>
                    <td>{{verReceta.ingredientes}}</td>
                    <td>{{verReceta.instrucciones}}</td>
                    <td>{{verReceta.imagen}}</td>
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
</style>