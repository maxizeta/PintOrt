<template>
  <div>
    <h1>{{ msg }}</h1>
    <nav class="navbar">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">PintOrt</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registroDeUsuario">Registrarse</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Iniciar secion</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/fotos">Fotos</router-link>
            </li>
            <li class="nav-item">
              <button @click="logout" class="nav-link btn btn-link">Salir</button>
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
      msg: 'Bienvenido',
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('usuario');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1em 2em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  color: #333;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  transition: color 200ms;
}

.navbar-brand:hover {
  color: #646cff;
}

.navbar-toggler {
  border: none;
  background: transparent;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%2870, 70, 70, 0.7%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 1em;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  color: #333;
  text-decoration: none;
  transition: color 200ms;
}

.nav-link:hover {
  color: #646cff;
}

.btn-link {
  border: none;
  background: none;
  padding: 0;
  color: #333;
  cursor: pointer;
  transition: color 200ms;
}

.btn-link:hover {
  color: #646cff;
}
</style>