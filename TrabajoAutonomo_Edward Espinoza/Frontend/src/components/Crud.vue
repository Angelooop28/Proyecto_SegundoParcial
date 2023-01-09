<template>
    <nav class="navbar navbar-expand-lg bg-dark mb-5  ">
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
                            class="list-style-none text-decoration-none fs-5 mx-2 text-white" to="/login"
                            v-if="show">Login</router-link></a>
                    <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
                            to="/crud" v-if="!show">Crud</router-link></a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="col">
            <div class="row">
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!datosclienteshow">
                    <h2 class="text-center ">Ingresar Datos Clientes</h2>
                    <form action="" class="" @submit.prevent="agregarcliente()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="datosclientes.name">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Segundo Nombre</label>
                                <input type="text" class="form-control" v-model="datosclientes.lastname">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Identificacion</label>
                                <input type="text" class="form-control" v-model="datosclientes.identification">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!datosconceptoshow">
                    <h2 class="text-center ">Ingresar Datos Concepto</h2>
                    <form action="" class="" @submit.prevent="agregarconcepto()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">producto</label>
                                <input type="text" class="form-control" v-model="datosproductos.producto">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">precio</label>
                                <input type="text" class="form-control" v-model="datosproductos.precio">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion</label>
                                <input type="text" class="form-control" v-model="datosproductos.description">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!datosgastoclienteshow">
                    <h2 class="text-center ">Ingresar Datos del cliente</h2>
                    <form action="" class="" @submit.prevent="agregargastocliente()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">caracteristicas</label>
                                <input type="text" class="form-control" v-model="datogastoclientes.caracteristicas">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">fecha</label>
                                <input type="text" class="form-control" v-model="datogastoclientes.fecha">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">hora</label>
                                <input type="text" class="form-control" v-model="datogastoclientes.hora">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">valortotal</label>
                                <input type="text" class="form-control" v-model="datogastoclientes.valortotal">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="row">
               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            datogastocliente: [],
            datocliente: [],
            datoproducto: [],
            datosclientes: {
                name: '',
                lastname: '',
                identification: '',

            },
            datosproductos: {
                producto: '',
                precio: '',
                description: ''
            },
            datogastoclientes: {
                caracteristicas: '',
                fecha: '',
                hora: '',
                valortotal: ''
            },
            datosclienteshow: false,
            datosconceptoshow: true,
            datosgastoclienteshow: true
        }
    },

    created() {
        this.mostrar()
    },

    methods: {

        mostrar() {
            axios.get('https://trabajo-autonomo-parcial-2-production.up.railway.app/cliente/')
                .then(resp => {
                    this.datocliente = resp.data.cliente
                })
            axios.get('https://trabajo-autonomo-parcial-2-production.up.railway.app/concepto/')
                .then(resp => {
                    this.datoproducto = resp.data.concepto
                })
            axios.get('https://trabajo-autonomo-parcial-2-production.up.railway.app/gastocliente/')
                .then(resp => {
                    this.datogastocliente = resp.data.gastocliente
                })
        },
        agregarcliente() {
            axios.post('https://trabajo-autonomo-parcial-2-production.up.railway.app/cliente/create', this.datosclientes)
                .then(resp => {
                    this.datocliente.push(resp.data.cliente)
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(f=>{
                    this.datosclienteshow = true;
                    this.datosconceptoshow = false;
                    
                    this.datosclientes.name = "";
                    this.datosclientes.lastname = ""
                    this.datosclientes.identification = ""
                })

        },
        agregarconcepto() {

            axios.post('https://trabajo-autonomo-parcial-2-production.up.railway.app/concepto/create', this.datosproductos)
                .then(resp => {
                    this.datoproducto.push(resp.data.concepto)
                })
                .catch(e => {
                    console.log(e)
                })
            this.datosconceptoshow = true;
            this.datosgastoclienteshow = false;
        },
        agregargastocliente() {

            axios.post('https://trabajo-autonomo-parcial-2-production.up.railway.app/gastocliente/create', this.datogastoclientes)
                .then(resp => {
                    this.datogastocliente.push(resp.data.gastocliente)
                })
                .catch(e => {
                    console.log(e)
                })
            this.datosgastoclienteshow=true
            this.datosclienteshow = false;
        },
        
    }
}
</script>

<style  scoped>

</style>