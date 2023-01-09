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
                    v-if="!showInversionista">
                    <h2 class="text-center ">Gestion de Inversionistas</h2>
                    <form action="" class="" @submit.prevent="crearInversionista()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="registroInversionista.nombre">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Identificacion</label>
                                <input type="text" class="form-control" v-model="registroInversionista.identificacion">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!showConcepto">
                    <h2 class="text-center ">Concepto de Inversion</h2>
                    <form action="" class="" @submit.prevent="crearConceptoInversion()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Concepto</label>
                                <input type="text" class="form-control" v-model="registroConceptoInversion.concepto">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Detalle</label>
                                <input type="text" class="form-control" v-model="registroConceptoInversion.detalle">
                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!showInversionRealizada">
                    <h2 class="text-center ">Ingresar de Notas</h2>
                    <form action="" class="" @submit.prevent="crearInversionRealizada()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">ID Inversionista</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.idinversionista">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">ID Concepto Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.idconceptoinversion">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Valor Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.valorinversion">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Fecha Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.fecha">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Duracion Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.duracioninversion">
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
                <th>nombre</th>
                <th>identificacion</th>
                <th>Acciones</th>


            </tr>
            <tr v-for="(item, index) in registroInversionista" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.identificacion }}</td>

                <td>
                    <button type="button" class="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        @click="editarregistroInversionista(item._id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarInversionista(registroIdioma)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="registroInversionista.nombre">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Identificacion</label>
                                <input type="text" class="form-control" v-model="registroInversionista.identificacion">
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
                    <button class="btn btn-danger bg-danger" @click="registroeliminarInversionsita(item._id)">Eliminar</button>
                </td>
            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>concepto</th>
                <th>detalle</th>
                <th>Acciones</th>
            </tr>
            <tr v-for="(item, index) in registroConceptoInversion" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.concepto }}</td>
                <td>{{ item.detalle }}</td>
                <td>
                    <button type="button" class="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                        @click="editarregistroConceptoInversion(item._id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarConceptoInversion()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Concepto</label>
                                <input type="text" class="form-control" v-model="registroConceptoInversion.concepto">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Detalle</label>
                                <input type="text" class="form-control" v-model="registroConceptoInversion.detalle">
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
                    <button class="btn btn-danger bg-danger" @click="registroeliminarConceptoInversion(item._id)">Eliminar</button>
                </td>

            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>id Inversionista</th>
                <th>id Concepto Inversion</th>
                <th>valor inversion</th>
                <th>fecha</th>
                <th>duracion inversion</th>
                <th>Acciones</th>
            </tr>

            <tr v-for="(item, index) in registroInversionRealizada" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.idinversionista }}</td>
                <td>{{ item.idconceptoinversion }}</td>
                <td>{{ item.valorinversion }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.duracioninversion }}</td>
                <td>
                    <button type="button" class="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                        @click="editarregistroInversionRealizada(item._id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarInversion()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">ID Inversionista</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.idinversionista">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">ID Concepto Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.idconceptoinversion">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Valor Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.valorinversion">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Fecha Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.fecha">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Duracion Inversion</label>
                                <input type="text" class="form-control" v-model="registroInversionRealizada.duracioninversion">
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
                        @click="registroeliminarInversion(item._id)">Eliminar</button>
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
                registroInversionista: {
                    nombre: '',
                    identificacion: ''
                },
                registroConceptoInversion:{
                    concepto:'',
                    detalle: ''
                },
                registroInversionRealizada:{
                    idinversionista: '',
                    idconceptoinversion:'',
                    valorinversion:'',
                    fecha:'',
                    duracioninversion:''
                },
                registroInversionistas:[],
                registroConceptoInversiones:[],
                registroInversionesRealizadas:[],
                showInversionista: false,
                showConcepto: true,
                showInversionRealizada: true

            }
        },

        created(){
            this.mostrarRegistros()
        },
        methods:{
            mostrarRegistros(){
                axios.get('https://web-production-f7a1.up.railway.app/inversionista')
                .then(resp =>{
                    this.registroInversionistas = resp.data
                    console.log('Luis'+resp.data)
                })
                axios.get('https://web-production-f7a1.up.railway.app/conceptoInversion')
                .then(resp =>{
                    this.registroConceptoInversiones = resp.data
                    console.log(resp.data)
                })
                axios.get('https://web-production-f7a1.up.railway.app/inversionRealizada')
                .then(resp =>{
                    this.registroInversionesRealizadas = resp.data
                    console.log(resp.data)
                })

            },
            crearInversionista(){
                axios.post('https://web-production-f7a1.up.railway.app/inversionista', this.registroInversionista)
                .then(resp => {
                    this.registroInversionistas.push(resp.data)
                })
                this.showInversionista= true
                this.showConcepto= false
            },
            crearConceptoInversion(){
                axios.post('https://web-production-f7a1.up.railway.app/conceptoInversion', this.registroConceptoInversion)
                .then(resp => {
                    this.registroConceptoInversiones.push(resp.data)
                })
                this.showConcepto= true
                this.showInversionRealizada = false
            },
            crearInversionRealizada(){
                axios.post('https://web-production-f7a1.up.railway.app/inversionRealizada', this.registroInversionRealizada)
                .then(resp => {
                    this.registroInversionesRealizadas.push(resp.data)
                })
                this.showInversionRealizada= true
                this.showInversionista=false
            },
            registroeliminarInversionsita( _id ){
                axios.delete(`https://web-production-f7a1.up.railway.app/inversionista/${_id}`)
                .then(resp=>{
                    const index  = this.registroInversionistas.findIndex(i => i._id === resp.data._id)
                    this.registroInversionistas.splice(index, 1)
                })
            },
            registroeliminarConceptoInversion(_id){
                axios.delete(`https://web-production-f7a1.up.railway.app/conceptoInversion/${_id}`)
                .then(resp=>{
                    const index  = this.registroConceptoInversiones.findIndex(i => i._id === resp.data._id)
                    this.registroConceptoInversiones.splice(index, 1)
                })
            },
            registroeliminarInversion(_id){
                axios.delete(`https://web-production-f7a1.up.railway.app/inversionRealizada/${_id}`)
                .then(resp=>{
                    const index  = this.registroInversionesRealizadas.findIndex(i => i._id === resp.data._id)
                    this.registroInversionesRealizadas.splice(index, 1)
                })
            },
            editarregistroInversionista(_id){
                axios.get(`https://web-production-f7a1.up.railway.app/inversionista/${_id}`)
                .then(resp =>{
                    this.registroInversionista.nombre= resp.data.nombre
                    this.registroInversionista.identificacion= resp.data.identificacion
                })
            },
            editarregistroConceptoInversion(_id){
                axios.get(`https://web-production-f7a1.up.railway.app/conceptoInversion/${_id}`)
                .then(resp =>{
                    this.registroConceptoInversion.concepto = resp.data.concepto
                    this.registroConceptoInversion.detalle = resp.data.detalle
                })
            },
            editarregistroInversionRealizada(_id){
                axios.get(`https://web-production-f7a1.up.railway.app/inversionRealizada/${_id}`)
                .then(resp =>{
                    this.registroInversionRealizada.idinversionista = resp.data.idinversionista
                    this.registroInversionRealizada.idconceptoinversion = resp.data.idconceptoinversion
                    this.registroInversionRealizada.valorinversion = resp.data.valorinversion
                    this.registroInversionRealizada.fecha = resp.data.fecha
                    this.registroInversionRealizada.duracioninversion = resp.data.duracioninversion
                })
            },
            editarInversionista(item){
                axios.put(`https://web-production-f7a1.up.railway.app/inversionista/${item._id}`, item )
                .then(resp =>{
                    const index = this.registroInversionistas.findIndex(n=>n._id === resp.data._id)
                    this.registroInversionistas[index].nombre = resp.data.nombre
                    this.registroInversionistas[index].identificacion = resp.data.identificacion
                })
            },
            editarConceptoInversion(item){
                axios.put(`https://web-production-f7a1.up.railway.app/conceptoInversion/${item._id}`, item )
                .then(resp =>{
                    const index = this.registroConceptoInversiones.findIndex(n=>n._id === resp.data._id)
                    this.registroConceptoInversiones[index].concepto = resp.data.concepto
                    this.registroConceptoInversiones[index].detalle = resp.data.detalle

                })
            },
            editarInversion(item){
                axios.put(`https://web-production-f7a1.up.railway.app/inversionRealizada/${item._id}`, item )
                .then(resp =>{
                    const index = this.registroInversionesRealizadas.findIndex(n=>n._id === resp.data._id)
                    this.registroInversionesRealizadas[index].idinversionista = resp.data.idinversionista
                    this.registroInversionesRealizadas[index].idconceptoinversion = resp.data.idconceptoinversion
                    this.registroInversionesRealizadas[index].valorinversion = resp.data.valorinversion
                    this.registroInversionesRealizadas[index].fecha = resp.data.fecha
                    this.registroInversionesRealizadas[index].duracioninversion = resp.data.duracioninversion
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

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {

    table {
        width: 100%;
    }

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
        display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr {
        border: 1px solid #ccc;
    }

    td {
        /* Behave  like a "row" */
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
    }

    td:before {
        /* Now like a table header */
        position: absolute;
        /* Top/left values mimic padding */
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        /* Label the data */
        content: attr(data-column);

        color: #000;
        font-weight: bold;
    }

}
</style>