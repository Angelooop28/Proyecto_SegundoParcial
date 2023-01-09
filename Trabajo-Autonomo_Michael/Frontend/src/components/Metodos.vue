<template>
     <nav class="navbar navbar-expand-lg bg-success mb-5  ">
        <div class="container-fluid  ">
            <a class="navbar-brand text-white fs-2" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-5">
                    <a class="nav-link" href="#"> <router-link to="/"
                            class="list-style-none text-decoration-none fs-5 mx-2 text-white">Inicio</router-link></a>
                    <a class="nav-link" href="#"><router-link
                            class="list-style-none text-decoration-none fs-5 mx-2 text-white" to="/ingreso"
                            v-if="show">Login</router-link></a>
                    <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
                            to="/metodos" v-if="!show">Crud</router-link></a>
                </div>
            </div>
        </div>
    </nav>

    <section class="primerformulario"> 
        <div class="container-fluid">
        <div class="col">
            <div class="row">
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!showIdioma">
                    <h2 class="text-center ">Idioma</h2>
                    <form action="" class="" @submit.prevent="crearIdioma()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion</label>
                                <input type="text" class="form-control" v-model="registroIdioma.description">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!showPalabra">
                    <h2 class="text-center ">Palabra</h2>
                    <form action="" class="" @submit.prevent="crearPalabra()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Palabra</label>
                                <input type="text" class="form-control" v-model="registroPalabra.palabra">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Deletreo</label>
                                <input type="text" class="form-control" v-model="registroPalabra.Deletreo">
                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!showRegistro">
                    <h2 class="text-center ">Registro</h2>
                    <form action="" class="" @submit.prevent="crearRegistroIdioma()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Deletreo</label>
                                <input type="text" class="form-control" v-model="registroidiomaRegistro.Deletreo">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">silabas</label>
                                <input type="text" class="form-control" v-model="registroidiomaRegistro.silabas">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">fonetica</label>
                                <input type="text" class="form-control" v-model="registroidiomaRegistro.fonetica">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="row">
               
            </div>
        </div>
    </div>
    </section>

    <section class="tablass">
        <div class="m-auto">
        <table class="table table-striped w-75 text-center">
            <tr>
                <th>id</th>
                <th>descripcion</th>
                <th>Acciones</th>


            </tr>
            <tr v-for="(item, index) in registroIdiomas" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.description }}</td>


                <td>
                    <button type="button" class="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        @click="editarregistroIdioma(item._id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Idioma</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarIdioma(registroIdioma)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion</label>
                                <input type="text" class="form-control" v-model="registroIdioma.description">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-danger bg-danger" @click="registroeliminarIdioma(item._id)">Eliminar</button>
                </td>
            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>palabra</th>
                <th>Deletreo</th>
                <th>Buttons</th>
            </tr>
            <tr v-for="(item, index) in registroPalabras" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.palabra }}</td>
                <td>{{ item.Deletreo }}</td>
                <td>
                    <button type="button" class="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                        @click="editarregistroPalabra(item._id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Palabra</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarPalabra()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Palabra</label>
                                <input type="text" class="form-control" v-model="registroPalabra.palabra">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Deletreo</label>
                                <input type="text" class="form-control" v-model="registroPalabra.Deletreo">
                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-danger bg-danger" @click="registroeliminarPalabra(item._id)">Eliminar</button>
                </td>

            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>Deletreo</th>
                <th>silabas</th>
                <th>fonetica</th>
                <th>Acciones</th>

            </tr>

            <tr v-for="(item, index) in registroidiomaRegistros" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.Deletreo }}</td>
                <td>{{ item.silabas }}</td>
                <td>{{ item.fonetica }}</td>
                <td>
                    <button type="button" class="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                        @click="editarregistroRegistro(item._id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Registro</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarRegistro()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Deletreo</label>
                                <input type="text" class="form-control" v-model="registroidiomaRegistro.Deletreo">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">silabas</label>
                                <input type="text" class="form-control" v-model="registroidiomaRegistro.silabas">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">fonetica</label>
                                <input type="text" class="form-control" v-model="registroidiomaRegistro.fonetica">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-danger bg-danger"
                        @click="registroeliminarRegistro(item._id)">Eliminar</button>
                </td>
            </tr>

        </table>

    </div>
    </section>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                registroIdioma: {
                    description: ''
                },
                registroPalabra:{
                    palabra:'',
                    Deletreo: ''
                },
                registroidiomaRegistro:{
                    Deletreo: '',
                    silabas:'',
                    fonetica:''
                },
                registroIdiomas:[],
                registroPalabras:[],
                registroidiomaRegistros:[],
                showIdioma: false,
                showRegistro: true,
                showPalabra: true



            }
        },

        created(){
            this.mostrarRegistros()
        },
        methods:{
            mostrarRegistros(){
                axios.get('https://web-production-f7a1.up.railway.app/idioma')
                .then(resp =>{
                    this.registroIdiomas = resp.data
                    console.log('hola'+resp.data)
                })
                axios.get('https://web-production-f7a1.up.railway.app/palabra')
                .then(resp =>{
                    this.registroPalabras = resp.data
                    console.log(resp.data)
                })
                axios.get('https://web-production-f7a1.up.railway.app/registro')
                .then(resp =>{
                    this.registroidiomaRegistros = resp.data
                    console.log(resp.data)
                })

            },
            crearIdioma(){
                axios.post('https://web-production-f7a1.up.railway.app/idioma', this.registroIdioma)
                .then(resp => {
                    this.registroIdiomas.push(resp.data)
                })
                this.showIdioma= true
                this.showPalabra= false
            },
            crearPalabra(){
                axios.post('https://web-production-f7a1.up.railway.app/palabra', this.registroPalabra)
                .then(resp => {
                    this.registroPalabras.push(resp.data)
                })
                this.showPalabra= true
                this.showRegistro = false
            },
            crearRegistroIdioma(){
                axios.post('https://web-production-f7a1.up.railway.app/registro', this.registroidiomaRegistro)
                .then(resp => {
                    this.registroidiomaRegistros.push(resp.data)
                })
                this.showRegistro= true
                this.showIdioma=false
            },
            registroeliminarIdioma( _id ){
                axios.delete(`https://web-production-f7a1.up.railway.app/idioma/${_id}`)
                .then(resp=>{
                    const index  = this.registroIdiomas.findIndex(i => i._id === resp.data._id)
                    this.registroIdiomas.splice(index, 1)
                })
            },
            registroeliminarPalabra(_id){
                axios.delete(`https://web-production-f7a1.up.railway.app/palabra/${_id}`)
                .then(resp=>{
                    const index  = this.registroPalabras.findIndex(i => i._id === resp.data._id)
                    this.registroPalabras.splice(index, 1)
                })
            },
            registroeliminarRegistro(_id){
                axios.delete(`https://web-production-f7a1.up.railway.app/registro/${_id}`)
                .then(resp=>{
                    const index  = this.registroidiomaRegistros.findIndex(i => i._id === resp.data._id)
                    this.registroidiomaRegistros.splice(index, 1)
                })
            },
            editarregistroIdioma(_id){
                axios.get(`https://web-production-f7a1.up.railway.app/idioma/${_id}`)
                .then(resp =>{
                    this.registroIdioma.description= resp.data.description
                })
            },
            editarregistroPalabra(_id){
                axios.get(`https://web-production-f7a1.up.railway.app/palabra/${_id}`)
                .then(resp =>{
                    this.registroPalabra.Deletreo= resp.data.Deletreo
                    this.registroPalabra.palabra= resp.data.palabra
                })
            },
            editarregistroRegistro(_id){
                axios.get(`https://web-production-f7a1.up.railway.app/registro/${_id}`)
                .then(resp =>{
                    this.registroidiomaRegistro.Deletreo = resp.data.Deletreo
                    this.registroidiomaRegistro.fonetica= resp.data.fonetica
                    this.registroidiomaRegistro.silabas= resp.data.silabas
                })
            },
            editarIdioma(item){
                axios.put(`https://web-production-f7a1.up.railway.app/idioma/${item._id}`, item )
                .then(resp =>{
                    const index = this.registroIdiomas.findIndex(n=>n._id === resp.data._id)
                    this.registroIdiomas[index].description = resp.data.description

                })
            },
            editarPalabra(item){
                axios.put(`https://web-production-f7a1.up.railway.app/palabra/${item._id}`, item )
                .then(resp =>{
                    const index = this.registroPalabras.findIndex(n=>n._id === resp.data._id)
                    this.registroPalabras[index].Deletreo = resp.data.Deletreo
                    this.registroPalabras[index].palabra = resp.data.palabra

                })
            },
            editarRegistro(item){
                axios.put(`https://web-production-f7a1.up.railway.app/registro/${item._id}`, item )
                .then(resp =>{
                    const index = this.registroidiomaRegistros.findIndex(n=>n._id === resp.data._id)
                    this.registroidiomaRegistros[index].Deletreo = resp.data.Deletreo
                    this.registroidiomaRegistros[index].fonetica = resp.data.fonetica
                    this.registroidiomaRegistros[index].silabas = resp.data.silabas

                })
            }
        }
    }
</script>

<style  scoped>
table {
    width: 750px;
    border-collapse: collapse;
    margin: 50px auto;
}

/* Zebra striping */
tr:nth-of-type(odd) {
    background: #eee;
}

th {
    background: #3498db;
    color: white;
    font-weight: bold;
}

td,
th {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 18px;
}

@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {

    table {
        width: 100%;
    }

    table,
    thead,
    tbody,
    th,
    td,
    tr {
        display: block;
    }

    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr {
        border: 1px solid #ccc;
    }

    td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
    }

    td:before {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: attr(data-column);

        color: #000;
        font-weight: bold;
    }

}
</style>