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

    <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded">
        <h2 class="text-center ">Ingreso</h2>
        <form action="" class="" @submit.prevent="login()">
            <div class="mx-1 mt-3">
                <div class="text-center">
                   <label for="" class="form-label fs-5">Correo</label>
                   <input type="text" class="form-control" v-model="usuario.correo"> 
                </div>
                <div class="text-center">
                   <label for="" class="form-label fs-5">Contrasena</label>
                   <input type="text" class="form-control" v-model="usuario.password"> 
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-danger w-50 mb-5 mt-5 ">Ingresar</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

    export default {
        data() {
            return {
                usuarios: [],
                usuario: {
                    correo: '',
                    password: ''
                }
            }
        },

        methods:{
            login(){
                axios.post('http://localhost:7878/user', this.usuario)
                .then(resp =>{
                    this.usuarios.push(resp.data)
                })
                router.push('/metodos')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>