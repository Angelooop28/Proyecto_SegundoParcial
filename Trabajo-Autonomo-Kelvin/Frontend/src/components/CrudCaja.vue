<template>
    <section class="navegacion-boostrap">
        <nav class="navbar navbar-expand-lg bg-success mb-5  ">
            <div class="container-fluid  ">
                <a class="navbar-brand text-dark fs-2" href="#">Proyecto-Caja</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-5">
                        <a class="nav-link" href="#"> <router-link to="/"
                                class="list-style-none text-decoration-none fs-5 mx-2 text-dark">Home</router-link></a>
                        <a class="nav-link" href="#"><router-link
                                class="list-style-none text-decoration-none fs-5 mx-2 text-dark" to="/loginCaja"
                                v-if="show">Login</router-link></a>
                        <a class="nav-link "><router-link
                                class="list-style-none text-decoration-none fs-5 mx-2 text-dark" to="/crudCaja"
                                v-if="!show">Crud/metodos</router-link></a>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    <section class="Formularios-Ingreso-Datos">
        <div class="container-fluid">
            <div class="col">
                <div class="row">
                    <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                        v-if="!MostrarFormularioCaja">
                        <h2 class="text-center ">Caja</h2>
                        <form action="" class="" @submit.prevent="enviarDatosCaja()">
                            <div class="mx-1 mt-3">
                                <div class="text-center">
                                    <label for="" class="form-label fs-5">Nombre</label>
                                    <input type="text" class="form-control" v-model="cajaCaja.Descripcion">
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                        v-if="!MostarFormularioConcepto">
                        <h2 class="text-center ">Concepto</h2>
                        <form action="" class="" @submit.prevent="enviarDatosConcepto()">
                            <div class="mx-1 mt-3">
                                <div class="text-center">
                                    <label for="" class="form-label fs-5">Concepto</label>
                                    <input type="text" class="form-control" v-model="cajaConcepto.Concepto">
                                </div>
                                <div class="text-center">
                                    <label for="" class="form-label fs-5">Detalle</label>
                                    <input type="text" class="form-control" v-model="cajaConcepto.Detalle">
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                        v-if="!MostrarFormularioTransacion">
                        <h2 class="text-center ">Transaccion</h2>
                        <form action="" class="" @submit.prevent="enviarDatosTransacion()">
                            <div class="mx-1 mt-3">
                                <div class="text-center">
                                    <label for="" class="form-label fs-5">Fecha</label>
                                    <input type="text" class="form-control" v-model="cajaTransacion.Fecha">
                                </div>
                                <div class="text-center">
                                    <label for="" class="form-label fs-5">Ingreso</label>
                                    <input type="text" class="form-control" v-model="cajaTransacion.Ingreso">
                                </div>
                                <div class="text-center">
                                    <label for="" class="form-label fs-5">Egreso</label>
                                    <input type="text" class="form-control" v-model="cajaTransacion.Egreso">
                                </div>
                                <div class="text-center">
                                    <label for="" class="form-label fs-5">Observacion</label>
                                    <input type="text" class="form-control" v-model="cajaTransacion.Observacion">
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

    <section class="Tablas-traer-datos">
        <div class="m-auto">
            <table class="table table-striped w-75 text-center">
                <tr>
                    <th>id</th>
                    <th>Descripcion</th>
                    <th>Buttons</th>

                </tr>
                <tr v-for="(item, index) in cajaCajas" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.Descripcion }}</td>


                    <td>
                        <button type="button" class="btn btn-warning bg-warning" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" @click="traerDatosFormCaja(item._id)">
                            Editar
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Caja</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" class="" @submit.prevent="editarCaja(cajaCaja)">
                                            <div class="mx-1 mt-3">
                                                <div class="text-center">
                                                    <label for="" class="form-label fs-5">Descripcion</label>
                                                    <input type="text" class="form-control"
                                                        v-model="cajaCaja.Descripcion">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-danger bg-danger" @click="EliminarCajaDatos(item._id)">Eliminar</button>
                    </td>
                </tr>
            </table>
            <table class="table table-striped w-75">
                <tr>
                    <th>id</th>
                    <th>Concepto</th>
                    <th>Detalle</th>
                    <th>Buttons</th>
                </tr>
                <tr v-for="(item, index) in cajaConceptos" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.Concepto }}</td>
                    <td>{{ item.Detalle }}</td>
                    <td>
                        <button type="button" class="btn btn-warning bg-warning" data-bs-toggle="modal"
                            data-bs-target="#exampleModal2" @click="traerDatosFormConcepto(item._id)">
                            Editar
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Concepto</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" class="" @submit.prevent="editarConcepto(cajaConcepto)">
                                            <div class="mx-1 mt-3">
                                                <div class="text-center">
                                                    <label for="" class="form-label fs-5">Concepto</label>
                                                    <input type="text" class="form-control"
                                                        v-model="cajaConcepto.Concepto">
                                                </div>
                                                <div class="text-center">
                                                    <label for="" class="form-label fs-5">Detalle</label>
                                                    <input type="text" class="form-control"
                                                        v-model="cajaConcepto.Detalle">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-danger bg-danger"
                            @click="EliminarConceptoDatos(item._id)">Eliminar</button>
                    </td>

                </tr>
            </table>
            <table class="table table-striped w-75">
                <tr>
                    <th>id</th>
                    <th>Fecha</th>
                    <th>Ingreso</th>
                    <th>Egreso</th>
                    <th>Observacion</th>
                    <th>Acciones</th>

                </tr>

                <tr v-for="(item, index) in cajaTransacions" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.Fecha }}</td>
                    <td>{{ item.Ingreso }}</td>
                    <td>{{ item.Egreso }}</td>
                    <td>{{ item.Observacion }}</td>
                    <td>
                        <button type="button" class="btn btn-warning bg-warning" data-bs-toggle="modal"
                            data-bs-target="#exampleModal3" @click="traerDatosFormTransacion(item._id)">
                            Editar
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Transicion</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" class="" @submit.prevent="editarTransacion(cajaTransacion)">
                                            <div class="mx-1 mt-3">
                                                <div class="text-center">
                                                    <label for="" class="form-label fs-5">Fecha</label>
                                                    <input type="text" class="form-control"
                                                        v-model="cajaTransacion.Fecha">
                                                </div>
                                                <div class="text-center">
                                                    <label for="" class="form-label fs-5">Ingreso</label>
                                                    <input type="text" class="form-control"
                                                        v-model="cajaTransacion.Ingreso">
                                                </div>
                                                <div class="text-center">
                                                    <label for="" class="form-label fs-5">Egreso</label>
                                                    <input type="text" class="form-control"
                                                        v-model="cajaTransacion.Egreso">
                                                </div>
                                                <div class="text-center">
                                                    <label for="" class="form-label fs-5">Observacion</label>
                                                    <input type="text" class="form-control"
                                                        v-model="cajaTransacion.Observacion">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-danger bg-danger"
                            @click="ELiminarTransacionDatos(item._id)">Eliminar</button>
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
            MostrarFormularioCaja: false,
            MostarFormularioConcepto: true,
            MostrarFormularioTransacion: true,

            cajaCajas: [],
            cajaConceptos: [],
            cajaTransacions: [],

            cajaCaja: {
                Descripcion: ''
            },
            cajaConcepto: {
                Concepto: '',
                Detalle: ''
            },
            cajaTransacion: {
                Fecha: '',
                Ingreso: '',
                Egreso: '',
                Observacion: ''
            }
        }
    },
    created() {
        this.TraerDatosCaja();
    },
    methods: {
        TraerDatosCaja() {
            axios.get('https://trabajo-parcial-2-production.up.railway.app/caja')
                .then(res => {
                    this.cajaCajas = res.data
                    console.log(res.data)
                })
            axios.get('https://trabajo-parcial-2-production.up.railway.app/concepto')
                .then(res => {
                    this.cajaConceptos = res.data
                    console.log(res.data)
                })
            axios.get('https://trabajo-parcial-2-production.up.railway.app/transaccion')
                .then(res => {
                    this.cajaTransacions = res.data
                    console.log(res.data)
                })

        },
        enviarDatosCaja() {
            axios.post('https://trabajo-parcial-2-production.up.railway.app/caja', this.cajaCaja)
                .then(res => {
                    this.cajaCajas.push(res.data)
                })
            this.MostrarFormularioCaja= true
            this.MostarFormularioConcepto= false
        },
        enviarDatosConcepto() {
            axios.post('https://trabajo-parcial-2-production.up.railway.app/concepto', this.cajaConcepto)
                .then(res => {
                    this.cajaConceptos.push(res.data)
                })
                this.MostarFormularioConcepto= true
                this.MostrarFormularioTransacion= false
        },
        enviarDatosTransacion() {
            axios.post('https://trabajo-parcial-2-production.up.railway.app/transaccion', this.cajaTransacion)
                .then(res => {
                    this.cajaTransacions.push(res.data)
                })
                this.MostrarFormularioTransacion=true;
                this.MostrarFormularioCaja= false

        },
        EliminarCajaDatos(_id) {
            axios.delete(`https://trabajo-parcial-2-production.up.railway.app/caja/${_id}`)
                .then(resp => {
                    const index = this.cajaCajas.findIndex(i => i._id === resp.data._id)
                    this.cajaCajas.splice(index, 1)
                })
        },
        EliminarConceptoDatos(_id) {
            axios.delete(`https://trabajo-parcial-2-production.up.railway.app/concepto/${_id}`)
                .then(resp => {
                    const index = this.cajaConceptos.findIndex(i => i._id === resp.data._id)
                    this.cajaConceptos.splice(index, 1)
                })
        },
        ELiminarTransacionDatos(_id) {
            axios.delete(`https://trabajo-parcial-2-production.up.railway.app/transaccion/${_id}`)
                .then(resp => {
                    const index = this.cajaTransacions.findIndex(i => i._id === resp.data._id)
                    this.cajaTransacions.splice(index, 1)
                })
        },
        traerDatosFormCaja(_id){ 
            axios.get(`https://trabajo-parcial-2-production.up.railway.app/caja/${ _id }`)
                .then(resp =>{
                    this.cajaCaja.Descripcion= resp.data.Descripcion

                })
        },
        traerDatosFormConcepto(_id){
            axios.get(`https://trabajo-parcial-2-production.up.railway.app/concepto/${ _id }`)
                .then(resp =>{
                    this.cajaConcepto.Concepto= resp.data.Concepto
                    this.cajaConcepto.Detalle =resp.data.Detalle

                })
        },
        traerDatosFormTransacion(_id){
            axios.get(`https://trabajo-parcial-2-production.up.railway.app/transaccion/${ _id }`)
                .then(resp =>{
                    this.cajaTransacion.Fecha= resp.data.Fecha
                    this.cajaTransacion.Ingreso =resp.data.Ingreso
                    this.cajaTransacion.Egreso =resp.data.Egreso
                    this.cajaTransacion.Observacion =resp.data.Observacion

                })
        },
        editarCaja(item){
            axios.put(`https://trabajo-parcial-2-production.up.railway.app/caja/${ item._id }`, item )
                .then(resp =>{
                    const index = this.cajaCajas.findIndex(n=>n._id === resp.data._id)
                    this.cajaCajas[index].Descripcion = resp.data.Descripcion

                })
        },
        editarConcepto(){
            axios.put(`https://trabajo-parcial-2-production.up.railway.app/concepto/${ item._id }`, item )
                .then(resp =>{
                    const index = this.cajaConceptos.findIndex(n=>n._id === resp.data._id)
                    this.cajaConceptos[index].Concepto = resp.data.Concepto
                    this.cajaConceptos[index].Detalle = resp.data.Detalle

                })
        },
        editarTransacion(){
            axios.put(`https://trabajo-parcial-2-production.up.railway.app/transaccion/${ item._id }`, item )
                .then(resp =>{
                    const index = this.cajaTransacions.findIndex(n=>n._id === resp.data._id)
                    this.cajaTransacions[index].Fecha = resp.data.Fecha
                    this.cajaTransacions[index].Ingreso = resp.data.Ingreso
                    this.cajaTransacions[index].Egreso = resp.data.Egreso
                    this.cajaTransacions[index].Observacion = resp.data.Observacion

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
    border-radius: 5px;
}

/* Zebra striping */
tr:nth-of-type(odd) {
    background: rgb(159, 160, 168);
}

th {
    background: #1dacbe;
    color: rgb(0, 0, 0);
    font-weight: bold;

}

td,
th {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 18px;
}

</style>