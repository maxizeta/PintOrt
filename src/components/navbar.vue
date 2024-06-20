<template>
    <div>
      <h1>{{ msg }}</h1>
  
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">app</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">menu</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/registroDeUsuario">registrarse</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">login</router-link>
              </li>
              <li class="nav-item" v-if="isAuthenticated()">
                <router-link class="nav-link" to="/fotos">fotos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/footer">footer</router-link>
              </li>
              <li class="nav-item">
                <button @click="logout" class="nav-link btn btn-link">salir</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      msg: 'Bienvenido a tu aplicación',
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('usuario');
      this.$router.push('/login');
    },
    isAuthenticated() {
      return localStorage.getItem('usuario') !== null;
    },
  },
};
</script>