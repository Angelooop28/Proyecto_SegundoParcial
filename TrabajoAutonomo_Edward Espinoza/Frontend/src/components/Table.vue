<template>
    <div class="m-auto">
        <table class="table table-striped w-75 text-center">
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>segundo nombre</th>
                <th>Identificacion</th>
                <th>Acciones</th>

            </tr>
            <tr v-for="(item, index) in datocliente" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.lastname }}</td>
                <td>{{ item.identification }}</td>

                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        @click="editarclientes(item._id)">
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
                                    <form action="" class="" @submit.prevent="editarenbaseclienteee()">
                                        <div class="mx-1 mt-3">
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">Nombre</label>
                                                <input type="text" class="form-control" v-model="datosclientes.name">
                                            </div>
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">Segundo Nombre</label>
                                                <input type="text" class="form-control"
                                                    v-model="datosclientes.lastname">
                                            </div>
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">Identificacion</label>
                                                <input type="text" class="form-control"
                                                    v-model="datosclientes.identification">
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
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
                    <button class="btn btn-danger bg-danger" @click="eliminardatosclientes(item._id)">Eliminar</button>
                </td>
            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>producto</th>
                <th>precio</th>
                <th>Descripcion</th>
                <th>Acciones</th>
            </tr>
            <tr v-for="(item, index) in datoproducto" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.producto }}</td>
                <td>{{ item.precio }}</td>
                <td>{{ item.description }}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                        @click="editarconcepto(item._id)">
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
                                    <form action="" class="" @submit.prevent="editarenbaseconcepto()">
                                        <div class="mx-1 mt-3">
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">producto</label>
                                                <input type="text" class="form-control"
                                                    v-model="datosproductos.producto">
                                            </div>
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">precio</label>
                                                <input type="text" class="form-control" v-model="datosproductos.precio">
                                            </div>
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">Descripcion</label>
                                                <input type="text" class="form-control"
                                                    v-model="datosproductos.description">
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
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
                    <button class="btn btn-danger bg-danger" @click="eliminardatosconcepto(item._id)">Eliminar</button>
                </td>

            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>caracteristicas</th>
                <th>fecha</th>
                <th>hora</th>
                <th>valortotal</th>
                <th>Acciones</th>

            </tr>

            <tr v-for="(item, index) in datogastocliente" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.caracteristicas }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.hora }}</td>
                <td>{{ item.valortotal }}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                        @click="editarcliente(item._id)">
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
                                    <form action="" class="" @submit.prevent="editarenbaseclientes(datogastoclientes)">
                                        <div class="mx-1 mt-3">
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">caracteristicas</label>
                                                <input type="text" class="form-control"
                                                    v-model="datogastoclientes.caracteristicas">
                                            </div>
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">fecha</label>
                                                <input type="text" class="form-control"
                                                    v-model="datogastoclientes.fecha">
                                            </div>
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">hora</label>
                                                <input type="text" class="form-control"
                                                    v-model="datogastoclientes.hora">
                                            </div>
                                            <div class="text-center">
                                                <label for="" class="form-label fs-5">valortotal</label>
                                                <input type="text" class="form-control"
                                                    v-model="datogastoclientes.valortotal">
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
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
                        @click="elimanardatosgastosclientens(item._id)">Eliminar</button>
                </td>
            </tr>

        </table>

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
        eliminardatosclientes(_id) {
            axios.delete(`https://trabajo-autonomo-parcial-2-production.up.railway.app/cliente/${_id}`)
                .then(resp => {
                    const index = this.datocliente.findIndex(item => item._id === resp.data._id);
                    this.datocliente.splice(index, 1)
                })
        },
        eliminardatosconcepto(_id) {
            axios.delete(`https://trabajo-autonomo-parcial-2-production.up.railway.app/concepto/${_id}`)
                .then(resp => {
                    const index = this.datoproducto.findIndex(item => item._id === resp.data._id);
                    this.datoproducto.splice(index, 1)
                })
        },
        elimanardatosgastosclientens(_id) {
            axios.delete(`https://trabajo-autonomo-parcial-2-production.up.railway.app/gastocliente/${_id}`)
                .then(resp => {
                    const index = this.datogastocliente.findIndex(item => item._id === resp.data._id)
                    this.datogastocliente.splice(index, 1)
                })
        },
        editarcliente(_id) {
            axios.get(`https://trabajo-autonomo-parcial-2-production.up.railway.app/gastocliente/${_id}`)
                .then(resp => {
                    const holita = resp.data;
                    const array = holita.filter(c => c._id === _id)
                    console.log(array[0]._id)
                    this.datogastoclientes.caracteristicas = array[0].caracteristicas;
                    this.datogastoclientes.fecha = array[0].fecha;
                    this.datogastoclientes.hora = array[0].hora;
                    this.datogastoclientes.valortotal = array[0].valortotal;

                })
                .catch(e => {
                    console.log(e)
                })

        },
        editarenbaseclientes(item) {
            axios.put(`https://trabajo-autonomo-parcial-2-production.up.railway.app/gastocliente/${item._id}`, item)
                .then(resp => {
                    const holita = resp.data;
                    const array = holita.filter(c => c._id === _id)
                    const index = this.datogastocliente.findIndex(c => c._id === array[0]._id)
                    this.datogastocliente[index].caracteristicas = resp.data[0].caracteristicas
                    this.datogastocliente[index].fecha = resp.data[0].fecha
                    this.datogastocliente[index].hora = resp.data[0].hora
                    this.datogastocliente[index].valortotal = resp.data[0].caracteristicas

                })
                .catch(e => {
                    console.log(e)
                })
        },
        editarconcepto(_id) {
            axios.get(`https://trabajo-autonomo-parcial-2-production.up.railway.app/concepto/${_id}`)
                .then(resp => {
                    const holita = resp.data;
                    const array = holita.filter(c => c._id === _id)
                    console.log(array[0]._id)
                    this.datosproductos.producto = array[0].producto;
                    this.datosproductos.precio = array[0].precio;
                    this.datosproductos.description = array[0].description;

                })
                .catch(e => {
                    console.log(e)
                })
        },
        editarenbaseconcepto(item) {
            axios.put(`https://trabajo-autonomo-parcial-2-production.up.railway.app/concepto/${item._id}`, item)
                .then(resp => {
                    const holita = resp.data;
                    const array = holita.filter(c => c._id === _id)
                    const index = this.datogastocliente.findIndex(c => c._id === array[0]._id)
                    this.datoproducto[index].producto = resp.data[0].producto
                    this.datoproducto[index].precio = resp.data[0].precio
                    this.datoproducto[index].description = resp.data[0].description

                })
                .catch(e => {
                    console.log(e)
                })
        },
        editarclientes(_id) {
            axios.get(`https://trabajo-autonomo-parcial-2-production.up.railway.app/cliente/${_id}`)
                .then(resp => {
                    const holita = resp.data;
                    const array = holita.filter(c => c._id === _id)
                    console.log(array[0]._id)
                    this.datosclientes.identification = array[0].identification;
                    this.datosclientes.lastname = array[0].lastname;
                    this.datosclientes.name = array[0].name;

                })
                .catch(e => {
                    console.log(e)
                })
        },
        editarenbaseclienteee(item) {
            axios.put(`https://trabajo-autonomo-parcial-2-production.up.railway.app/concepto/${item._id}`, item)
                .then(resp => {
                    const holita = resp.data;
                    const array = holita.filter(c => c._id === _id)
                    const index = this.datogastocliente.findIndex(c => c._id === array[0]._id)
                    this.datocliente[index].identification = resp.data[0].identification
                    this.datocliente[index].lastname = resp.data[0].lastname
                    this.datocliente[index].name = resp.data[0].name

                })
                .catch(e => {
                    console.log(e)
                })
        },
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